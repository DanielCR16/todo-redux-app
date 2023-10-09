import { Component,OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from '../store/indexTodo';
import { Store } from '@ngrx/store';
import { Filtro } from '../store/actions/filtro.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos:Todo[]=[];
  filtroActual:Filtro;
  constructor(private store:Store<AppState>){

  }
  ngOnInit(): void {
this.store.subscribe(({todo,filtro})=>{
  this.todos=todo;
  this.filtroActual=filtro;
} );
  }


}
