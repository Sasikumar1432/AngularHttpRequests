import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = 'fjskdnlzns';

    let mreq = request.clone({
      method: 'GET',
      body: { product: 'it is the request headers' },
      // headers: new HttpHeaders({
      //   Authorization: `Bearer ${token}`,
      // }),
    });
    console.log('request interceptor');
    return next.handle(mreq).pipe(tap());
  }
}
