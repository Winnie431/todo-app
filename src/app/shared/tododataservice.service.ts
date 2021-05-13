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

  
 getAllTodos(){
   return this.http.get(API_URL + 'todos/')
 }
 
}
