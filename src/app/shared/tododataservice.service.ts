import { transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Todo} from './todo.module';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TododataserviceService {

  todos:Todo[] =[ ]


  constructor(private http:HttpClient ) {
    this.todos = this.getAllTodos()
   }

  getAllTodos(): Todo[] {
    this.http.get(API_URL + 'todos/')
    .subscribe((response : any ) =>{
          this.todos = response
          console.log(this.todos)
    })
     return this.todos
  }

  addTodo(todo:Todo){
    this.todos.push(todo)
  }

  updateTodo(index: number, updatedTodo:Todo){
    this.todos[index] = updatedTodo
  }

  deleteTodo(index: number){
    this.todos.splice(index ,1)
  }
}
