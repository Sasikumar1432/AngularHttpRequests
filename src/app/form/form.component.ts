import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateEmail, updateName, updateMobile } from '../actions';
import { getUsers } from '../user.action';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private store: Store<any>) {}

  uss = [];
  error = false;
  ngOnInit() {
    this.store.dispatch(getUsers());
    this.store.select('users').subscribe((data) => {
      this.uss = data.users;
      this.error = data.apierror;
      console.log(this.uss);
    });
  }
  editName(input) {
    console.log(updateName({ name: input.value }));
    this.store.dispatch(updateName({ name: input.value }));
    input.value = '';
  }
  editEmail(input) {
    this.store.dispatch(updateEmail({ email: input.value }));
    input.value = '';
  }
  editMobile(input) {
    this.store.dispatch(updateMobile({ mobile: input.value }));
    input.value = '';
  }
}
