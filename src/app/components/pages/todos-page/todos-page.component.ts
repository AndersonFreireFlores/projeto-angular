import { TodoService } from './../../../services/todos.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private TodoService: TodoService) { }

  ngOnInit(): void {
    this.TodoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
}

