import { Component } from '@angular/core';
import {FormControl,Validators,FormBuilder} from '@angular/forms'
import { AppState } from '../store/indexTodo';
import { Store } from '@ngrx/store';
import { crear } from '../store/actions/todo.actions';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
txtInput:FormControl=this.fb.control('',Validators.required);
constructor(  private fb: FormBuilder,private store:Store<AppState>){
//  this.txtInput=new FormControl('Hola',Validators.required)
}
agregar(){

  if(this.txtInput.invalid){return;}
    this.store.dispatch(crear({texto:this.txtInput.value}))
    this.txtInput.reset()
}
}
