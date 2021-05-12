import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.module';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent implements OnInit {

  @Input()
  todo !: Todo 
  constructor() { }

  ngOnInit(): void {
  }

}
