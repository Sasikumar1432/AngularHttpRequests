import { createReducer, on } from '@ngrx/store';
import { updateEmail, updateMobile, updateName } from './actions';
import { state } from '@angular/animations';
import { Appstate } from './model';

let initialstate: Appstate = {
  name: '',
  email: '',
  mobile: null,
  post: [{ id: 3, title: 'sasi', desc: 'kumar' }],
};

//dispatch({ type: 'edit', payload: '' });

// export function userReducer(state = initialstate, action) {
//   switch (action.type) {
//     case 'name-edit':
//       return { ...state, name: action.payload };
//     case 'email-edit':
//       return { ...state, email: action.payload };
//     case 'mobile-edit':
//       return { ...state, mobile: action.payload };

//     default:
//       return state;
//   }
// }

// {
//     "name": "sasi",
//     "type": "name-edit"
// }

// export const userReducer = createReducer(
//   initialstate,
//   on(updateName, (state, data) => ({ ...state, name: data.name })),
//   on(updateEmail, (state, data) => ({ ...state, email: data.email })),

//   on(updateMobile, (state, data) => ({ ...state, mobile: data.mobile }))
// );

export const userReducer = createReducer(
  initialstate,
  on(updateName, (state, { name }) => ({ ...state, name: name })),
  on(updateEmail, (state, { email }) => ({ ...state, email: email })),

  on(updateMobile, (state, { mobile }) => ({ ...state, mobile: mobile }))
);
