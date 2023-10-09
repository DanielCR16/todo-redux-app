import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/indexTodo';
import { Filtro, setFiltro } from '../store/actions/filtro.action';
import { clearCompleteds } from '../store/actions/todo.actions';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual:Filtro='completados';
  filtros:Filtro[]=['todos','completados','pendientes',];
  pendientes:number=0;
constructor(private store:Store<AppState>){}

  ngOnInit(): void {
    this.store.select('filtro').subscribe(filtro=>
      this.filtroActual=filtro)
      this.store.subscribe(state=>{
        this.filtroActual=state.filtro
        this.pendientes=state.todo.filter(todo=>!todo.completado).length
      }

        )
  }
  changeFiltro(tipoFiltro:Filtro){
    this.store.dispatch(setFiltro({tipoFiltro:tipoFiltro}))
  }
  clearCompleted(){
    this.store.dispatch(clearCompleteds())
  }
}
