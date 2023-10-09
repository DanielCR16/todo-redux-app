import { createAction, props } from '@ngrx/store';

//RECORDATORIO si existiera 2 acciones con el mismo titulo EJM:[Todo] Toggle Todo ejecuta los 2
export const crear = createAction('[Todo] Crear Todo',props<{texto:string}>());
export const toggle=createAction('[Todo] Toggle Todo',props<{id:number}>());
export const guardar=createAction('[Todo] Guardar Todo',props<{id:number,textoEdit:string}>());
export const borrar=createAction('[Todo] Borrar Todo',props<{id:number}>());
export const markAll=createAction('[Todo] Marcar Todo',props<{estado:boolean}>());
export const clearCompleteds=createAction('[Todo] Borrar Completados');





