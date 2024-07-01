import { createAction, props } from '@ngrx/store';

export const updateName = createAction('name-edit', props<{ name: string }>());
export const updateEmail = createAction(
  'email-edit',
  props<{ email: string }>()
);
export const updateMobile = createAction(
  'mobile-edit',
  props<{ mobile: number }>()
);

// export function updateName(name) {
//   return {
//     type: 'name-edit',
//     payload: name,
//   };
// }
// export function updatEmail(name) {
//   return {
//     type: 'email-edit',
//     payload: name,
//   };
// }
// export function updateMobile(name) {
//   return {
//     type: 'mobile-edit',
//     payload: name,
//   };
// }
