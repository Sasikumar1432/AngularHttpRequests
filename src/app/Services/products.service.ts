import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/products';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  createProduct(products: { pName: string; desc: string; price: string }) {
    debugger;
    this.http
      .post<{ name: string }>(
        'https://angularpractise-d18f2-default-rtdb.firebaseio.com/products.json',
        products
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
  fetchproducts() {
    debugger;
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-control-allow-origin', '*');
    // .set('Authorization', 'bearer');

    // const params = new HttpParams().set('reques', 'pretty');
    return this.http
      .get<{ [key: string]: Product }>(
        'https://angularpractise-d18f2-default-rtdb.firebaseio.com/products.json',
        { headers: headers }
      )

      .pipe(
        map((res) => {
          console.log(res);
          const products = [];
          for (const Key in res) {
            if (res.hasOwnProperty(Key)) {
              products.push({ ...res[Key], id: Key });
            }
          }
          return products;
        })
      );
  }
  onDeleteProduct(id: String) {
    this.http
      .delete(
        'https://angularpractise-d18f2-default-rtdb.firebaseio.com/products/' +
          id +
          '.json'
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
  onDeleteAllProducts() {
    this.http
      .delete(
        'https://angularpractise-d18f2-default-rtdb.firebaseio.com/products.json'
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  updateProduct(id: string, value: Product) {
    debugger;
    this.http
      .put(
        'https://angularpractise-d18f2-default-rtdb.firebaseio.com/products/' +
          id +
          '.json',
        value
      )
      .subscribe((da) => {
        console.log(da);
      });
  }
}
