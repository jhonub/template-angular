import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoComponent } from './empleado.component';
import { CreateEmpleadoComponent } from './create-empleado/create-empleado.component';
import { ListEmpleadoComponent } from './list-empleado/list-empleado.component';
import { DeleteEmpleadoComponent } from './delete-empleado/delete-empleado.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    EmpleadoComponent, 
    CreateEmpleadoComponent, 
    ListEmpleadoComponent, 
    DeleteEmpleadoComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    EmpleadoComponent, 
    CreateEmpleadoComponent, 
    ListEmpleadoComponent, 
    DeleteEmpleadoComponent,
    ReactiveFormsModule
  ]
})
export class EmpleadoModule { }
