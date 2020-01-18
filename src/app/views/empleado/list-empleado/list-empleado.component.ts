import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/webservice/webservice.service';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {

  public listEmpleados:any;

  constructor( private webService:WebService ) { }

  ngOnInit() {
    this.inicializator();
    
  }
  inicializator(){
    this.listEmpleados = [];
    this.listEmpleadoQuery();
  }
  listEmpleadoQuery() {
    this.webService.getlistEmpleados().subscribe(
      response => {
        console.log();
         this.listEmpleados = response;        
      },
      error => {
        console.log(error);
      }
    )
  }
  validatorEmitEmpleado(){
    this.inicializator();
  }
}
