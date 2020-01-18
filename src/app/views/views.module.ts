import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewsRoutes } from "./views.routing";
import { ProductoModule } from './producto/producto.module';
import { EmpleadoModule } from './empleado/empleado.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ProductoModule,
    EmpleadoModule,
    RouterModule.forChild(ViewsRoutes)
  ]
})
export class ViewsModule { }
