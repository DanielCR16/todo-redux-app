import { createAction,props } from "@ngrx/store";

export type Filtro = 'todos' | 'completados' | 'pendientes';
export const setFiltro = createAction('[Filtro] Set Filtro', props<{ tipoFiltro: Filtro }>());
