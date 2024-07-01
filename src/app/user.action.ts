import { createAction, props } from '@ngrx/store';

export const setUsers = createAction('set-users', props<{ users: any[] }>());
export const getUsers = createAction('get-user');

export const setError = createAction('set-error', props<{ error: any }>());
