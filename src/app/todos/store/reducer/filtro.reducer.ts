import { createReducer,on} from "@ngrx/store";
import { Filtro, setFiltro } from "../actions/filtro.action";




export const initialState = 'todos' as Filtro;// Establecer tipo explícito a "todos"

export const _filtroReducer = createReducer(
  initialState,
  on(setFiltro, (state, { tipoFiltro }) => tipoFiltro)
);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}
