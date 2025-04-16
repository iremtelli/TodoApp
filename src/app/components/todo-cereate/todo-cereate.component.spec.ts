import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCereateComponent } from './todo-cereate.component';

describe('TodoCereateComponent', () => {
  let component: TodoCereateComponent;
  let fixture: ComponentFixture<TodoCereateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoCereateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoCereateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
