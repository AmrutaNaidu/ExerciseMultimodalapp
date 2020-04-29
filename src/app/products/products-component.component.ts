import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products-component',
  template: `
    <app-generic-list-component [genericList]="productsList"></app-generic-list-component>
    <app-products-input-form-component (saveProduct)="addProductToList($event)"></app-products-input-form-component>
  `,
  styles: []
})
export class ProductsComponent implements OnInit {
  
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.productsList = this.service.getProducts();
    console.log("this.productsList "+JSON.stringify(this.productsList));
  }
  productsList: any = []

  addProductToList(event) {
    let obj = {name: event, description: "This is new entry"}
    this.productsList.push(obj)
  }
}
