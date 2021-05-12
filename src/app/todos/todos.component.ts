import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../shared/todo.module';
import { TododataserviceService } from '../shared/tododataservice.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:Todo[] =[]

  constructor( private tododataservceService:TododataserviceService  ) { }

  ngOnInit(): void {
  this.todos = this.tododataservceService.getAllTodos()
  }

  onFormSubmit(form:NgForm){
    if (form.invalid) return alert("form is invalid")
    console.log("Form submitted")
    console.log(form)

    this.tododataservceService.addTodo(new Todo(form.value.text))

      form.reset()
  }

}
