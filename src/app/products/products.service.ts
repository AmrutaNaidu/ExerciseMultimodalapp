import { Injectable } from '@angular/core'

@Injectable ()

export class ProductsService {
    products: any = [
        {name: "Laptop", description: "This is an amazing Laptop"},
        {name: "Keyboard", description: "This is an amazing Keyboard"},
        {name: "Mouse", description: "This is an amazing Mouse"},
        {name: "Projector", description: "This is an amazing Projector"},
        {name: "Hard Drive", description: "This is an amazing Hard Drive"}
    ]

    getProducts() {
        return this.products;
    }
}