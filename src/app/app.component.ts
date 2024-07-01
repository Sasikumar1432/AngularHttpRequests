import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './Models/products';
import { ProductService } from './Services/products.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularHttpRequests';
  @ViewChild('productsForm') form: NgForm;
  editMode: boolean = false;
  isfetching: boolean = false;

  errormessage: string = null;
  currentProductId: string;

  user;
  constructor(
    private productservice: ProductService,
    private store: Store<any>
  ) {
    store.select('user').subscribe((data) => {
      this.user = data;
      console.log(data);
    });
  }

  allproducts: Product[] = [];
  ngOnInit() {
    this.fetchProducts();
    console.log(this.form);
  }

  onProductsFetch() {
    this.fetchProducts();
  }

  OnProductCreate(products: { pName: string; desc: string; price: string }) {
    if (!this.editMode) this.productservice.createProduct(products);
    else this.productservice.updateProduct(this.currentProductId, products);
    this.fetchProducts();
  }

  OnAdd() {}

  private fetchProducts() {
    this.isfetching = true;

    this.productservice.fetchproducts().subscribe(
      (products) => {
        console.log(products);
        this.allproducts = products;
        this.isfetching = false;
      },
      (err) => {
        this.errormessage = err.message;
      }
    );
    this.form.reset();
  }

  onDeleteProduct(id: string) {
    this.productservice.onDeleteProduct(id);
    // this.fetchProducts();
  }
  onDeleteAllProducts() {
    this.productservice.onDeleteAllProducts();
    // this.fetchProducts();
  }

  onEditClicked(id: string) {
    debugger;

    this.currentProductId = id;
    // get the product based pon id
    let currentProduct = this.allproducts.find((p) => {
      return p.id === id;
    });
    //console.log(this.form);
    console.log(currentProduct);

    //populate the form with product details
    this.form.setValue({
      pName: currentProduct.pName,
      desc: currentProduct.desc,
      price: currentProduct.price,
    });

    //change the button value to update product
    this.editMode = true;
  }

  obs = new Observable((ober) => {
    ober.next(1);
    ober.next(2);
    setTimeout(() => {
      ober.next(3);
      ober.next(4);
      ober.complete();
    }, 2000);
  });
  unsub: any;
  Test() {
    this.unsub = this.obs.subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log('error', err);
      },
      () => {
        console.log('completed');
      }
    );
  }

  unsubscr() {
    this.unsub.unsubscribe();
  }
}
