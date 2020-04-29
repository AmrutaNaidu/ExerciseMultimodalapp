import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products-component.component';
import { ProductsService } from './products.service';
import { CustomWidgetsModule } from '../custom-widgets/custom-widgets.module';
import { CustomFormsModule } from '../custom-forms/custom-forms.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    CustomWidgetsModule,
    CustomFormsModule
  ],
  exports: [ProductsComponent],
  providers: [ProductsService]
})
export class ProductsModule { }
