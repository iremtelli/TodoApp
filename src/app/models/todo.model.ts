export interface Todo {
  id: number;
  title: string;
  description?: string;
  dueDate?: Date;
  category?: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
}
