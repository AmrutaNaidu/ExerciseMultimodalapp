import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsInputFormComponent } from './products-input-form-component.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [ProductsInputFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ProductsInputFormComponent]
})
export class CustomFormsModule { }
