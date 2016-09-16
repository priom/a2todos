import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        text: 'Work'
      },
      {
        text: 'Meeting'
      },
      {
        text: 'Assignment'
      }
    ];
  }

  addTodo(){
    this.todos.push({
      text: this.text
    });
  }

  deleteTodo(todoText){
    for(let i = 0; i < this.todos.length; ++i) {
      if(this.todos[i].text == todoText){
        this.todos.splice(i, 1);
      }
    }
  }
}
