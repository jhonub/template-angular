import { Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { EmpleadoComponent } from './empleado/empleado.component';

export const ViewsRoutes:Routes= [
    {
        path:'producto',
        component: ProductoComponent
    },
    {
        path:'empleado',
        component:EmpleadoComponent
    }
]