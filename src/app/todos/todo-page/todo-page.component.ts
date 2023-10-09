import { Component } from '@angular/core';
import { AppState } from '../store/indexTodo';
import { Store } from '@ngrx/store';
import { markAll } from '../store/actions/todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {
  completado:boolean=false;
  constructor(private store:Store<AppState>){

  }
  markAll(){
    this.completado=!this.completado;
    this.store.dispatch(markAll({estado:this.completado}));
  }
}
