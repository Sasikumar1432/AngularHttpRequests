import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TestInterceptor } from './test.interceptor';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './userReducer';
import { FormComponent } from './form/form.component';
import { EffectsModule } from '@ngrx/effects';
import { userEffect } from './user.effects';
import { userreducer } from './user.reducer';

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ user: userReducer, users: userreducer }),
    EffectsModule.forRoot([userEffect]),
  ],
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: TestInterceptor,
  //     multi: true,
  //   },
  // ],

  bootstrap: [AppComponent],
})
export class AppModule {}
