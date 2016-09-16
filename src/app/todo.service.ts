import { Injectable } from '@angular/core';
import { Init } from './init-todos';

@Injectable()
export class TodoService extends Init {

  constructor() {
    super();
    console.log('TodoService initialiazed...');
    this.load();
  }

  getTodos(){
    let todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  addTodo(newTodo){
    let todos = JSON.parse(localStorage.getItem('todos'));

    // Add new todo
    todos.push(newTodo);
    // Set new todos
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(todoText){
    let todos = JSON.parse(localStorage.getItem('todos'));

    for(let i = 0; i < todos.length; ++i) {
      if(todos[i].text == todoText){
        todos.splice(i, 1);
      }
    }
    // Set new todos
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  updateTodo(oldText, newText){
    let todos = JSON.parse(localStorage.getItem('todos'));

    for(let i = 0; i < todos.length; ++i) {
      if(todos[i].text == oldText){
        todos[i].text = newText;
      }
    }
    // Set new todos
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
