import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/webservice/webservice.service';

@Component({
  selector: 'list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent implements OnInit {

  public listProdutos: any;

  constructor( private webService: WebService ) { }

  ngOnInit() {
    this.incializator();
  }

  incializator() {
    this.listProdutos = [];
    this.listProductosQuery();
  }

  listProductosQuery() {
    this.webService.getlistProductos().subscribe(
      response => {
        this.listProdutos = response;        
      },
      error => {
        console.log(error);
      }
    )
  }

  validatorEmitProducto() {
    this.incializator();
  }
 
}
