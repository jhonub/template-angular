import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto.component';
import { CreateProductoComponent } from './create-producto/create-producto.component';
import { DeleteProductoComponent } from './delete-producto/delete-producto.component';
import { ListProductoComponent } from './list-producto/list-producto.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

// const rutasApp:Routes = [
//   {path: 'lista-producto', component:ListProductoComponent}
// ]

@NgModule({
  declarations: [
    ProductoComponent, 
    CreateProductoComponent, 
    DeleteProductoComponent, 
    ListProductoComponent
  ],
  imports: [
    // RouterModule.forRoot(rutasApp),
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    ProductoComponent, 
    CreateProductoComponent, 
    DeleteProductoComponent, 
    ListProductoComponent
  ]
})
export class ProductoModule { }
