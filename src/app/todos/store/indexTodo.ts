import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import { todoReducer } from "./reducer/todo.reducer";
import { filtroReducer } from "./reducer/filtro.reducer";
import { Filtro } from "./actions/filtro.action";


export interface AppState {
  todo:Todo[]
  filtro:Filtro
}

export const reducers:ActionReducerMap<AppState>={
todo:todoReducer,
filtro:filtroReducer
}
