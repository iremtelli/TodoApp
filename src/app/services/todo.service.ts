import { Injectable, signal, computed } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private readonly STORAGE_KEY = 'todoList';

  private todosSignal = signal<Todo[]>(this.loadFromStorage());

  todos = computed(() => this.todosSignal());

  addTodo(todo: Todo) {
    const updated = [...this.todosSignal(), todo];
    this.todosSignal.set(updated);
    this.saveToStorage(updated);
  }

  toggleComplete(id: number) {
    const updated = this.todosSignal().map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    this.todosSignal.set(updated);
    this.saveToStorage(updated);
  }

  deleteTodo(id: number) {
    const updated = this.todosSignal().filter(t => t.id !== id);
    this.todosSignal.set(updated);
    this.saveToStorage(updated);
  }

  private saveToStorage(data: Todo[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }

  private loadFromStorage(): Todo[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }
}
