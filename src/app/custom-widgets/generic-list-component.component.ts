import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-list-component',
  template: `
    <div>
      <div *ngFor="let item of genericList; let itemId = index">
        <p class="name" (click)="showDescription(itemId)">{{item.name}}</p>
        <p>{{item.description}}</p>
      </div>
    </div>
  `,
  styles: [`
    .name {
      font-weight: bold;
    }
  `]
})
export class GenericListComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  productId: number;
  flag: boolean = true;

  @Input() genericList: []

  showDescription(id) {
    this.productId = id;
  }

}
