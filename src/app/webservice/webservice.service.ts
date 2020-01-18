import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebService {

  private API_Server = "https://codbar-api.herokuapp.com/api/";

  constructor(private http: HttpClient) { }

  //Producto
  getlistProductos(): Observable<any>{
    return this.http.get(this.API_Server + 'productos/');
  }

  getByIdProducto(id): Observable<any>{
    return this.http.get(this.API_Server + 'productos/' + id);
  }
  postProducto(producto): Observable<any>{
    return this.http.post(this.API_Server + 'productos/', producto);
  }
  putProducto(id, producto): Observable<any>{
    return this.http.put(this.API_Server + 'productos/' + id, producto);
  }
  deleteProducto(id): Observable<any>{
    return this.http.delete(this.API_Server + 'productos/' + id);
  }
  
  //Empleado
  getlistEmpleados(): Observable<any>{
    return this.http.get(this.API_Server + 'empleados/');
  }

  getByIdEmpleado(id): Observable<any>{
    return this.http.get(this.API_Server + 'empleados/' + id);
  }
  postEmpleado(empleado): Observable<any>{
    return this.http.post(this.API_Server + 'empleados/', empleado);
  }
  putEmpleado(id, empleado): Observable<any>{
    return this.http.put(this.API_Server + 'empleados/' + id, empleado);
  }
  deleteEmpleado(id): Observable<any>{
    return this.http.delete(this.API_Server + 'empleados/' + id);
  }
}