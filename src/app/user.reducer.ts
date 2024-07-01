import { createReducer, on } from '@ngrx/store';
import { setError, setUsers } from './user.action';

let initialstate = {
  users: [],
  apierror: false,
};
export const userreducer = createReducer(
  initialstate,
  on(setUsers, (state, { users }) => {
    return { ...state, users, apierror: false };
  }),
  on(setError, (state, { error }) => {
    return { ...state, apierror: true };
  })
);
