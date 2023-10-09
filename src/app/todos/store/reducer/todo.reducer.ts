import { State, createReducer, on } from '@ngrx/store';
import { borrar, clearCompleteds, crear, guardar, markAll, toggle } from '../actions/todo.actions';
import { Todo } from '../../models/todo.model';


export const initialState:Todo[] = [
  new Todo("Comprar leche"),
  new Todo("Comprar xd"),
  new Todo("Comprar chems"),
  new Todo("Comprar huevos")];

export const _todoReducer = createReducer(
  initialState,
  on(crear, (state,{texto}) => [...state,new Todo(texto)]),
  on(toggle, (state,{id}) =>{return state.map(itemTodo=>itemTodo.id===id?{ ...itemTodo, completado:!itemTodo.completado}:itemTodo) } ),
  on(borrar, (state,{id}) =>{return state.filter(itemTodo=>itemTodo.id!==id) } ),

  on(guardar,(state,{id,textoEdit})=>{
    return state.map(itemEdit=>{
      if(itemEdit.id===id){
      return {
        ...itemEdit,
        texto:textoEdit
      }
      }else {
        return itemEdit;
      }

    })
  }),
on(markAll,(state,{estado})=> state.map(itemState=>{
    return {
      ...itemState,
      completado:estado
    }
  })
),
on(clearCompleteds,(State)=>State.filter(todo=>!todo.completado))
   //return state.map(itemTodo=>{
   //  if(itemTodo.id===id){
   //    itemTodo.completado=!itemTodo.completado
   //return itemTodo
   //  }else{
   //   return itemTodo
   //  }
     // itemTodo.id===id?{ ...itemTodo, completado:!itemTodo.completado}:itemTodo

   // })


);
export function todoReducer(state,action){

  return _todoReducer(state,action)
}
