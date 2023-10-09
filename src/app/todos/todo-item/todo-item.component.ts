import { Component,Input,OnInit,ViewChild,ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import {FormControl,Validators,FormBuilder} from '@angular/forms'
import { AppState } from '../store/indexTodo';
import { Store } from '@ngrx/store';
import { borrar, guardar, toggle } from '../store/actions/todo.actions';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{

@Input() todoItem:Todo;
@ViewChild('inputFisico') inputFisico:ElementRef;

chkCompletado:FormControl;
txtInput:FormControl;

editando:boolean=false;
constructor(private store:Store<AppState>  ){

}
ngOnInit(): void {

this.chkCompletado= new FormControl(this.todoItem.completado)
this.txtInput=new FormControl(this.todoItem.texto,Validators.required)

 this.chkCompletado.valueChanges.subscribe( valor => {
  this.store.dispatch(toggle({id:this.todoItem.id}))
});
  }
  editar(){
    this.editando=true;
    this.txtInput.setValue(this.todoItem.texto)
    setTimeout(()=>{
      this.inputFisico.nativeElement.select();
    },1);

  }
  saveEdition(){
    this.editando=false;
    if(this.txtInput.invalid) return;
    if(this.todoItem.texto=== this.txtInput.value)return;
    this.store.dispatch(guardar({id:this.todoItem.id,textoEdit:this.txtInput.value}))
  }
  borrar(){
    this.store.dispatch(borrar({id:this.todoItem.id}))
  }
}
