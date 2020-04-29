import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-input-form-component',
  template: `
    <input type="text" [(ngModel)]="value" />
    <button (click)="addProduct()">Add</button> 
  `,
  styles: []
})
export class ProductsInputFormComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  value: string = "";
  @Output() saveProduct = new EventEmitter();
  addProduct() {this.saveProduct.emit(this.value)}
}
