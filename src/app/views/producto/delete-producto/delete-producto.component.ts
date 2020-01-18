import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { WebService } from 'src/app/webservice/webservice.service';
@Component({
  selector: 'delete-producto',
  templateUrl: './delete-producto.component.html',
  styleUrls: ['./delete-producto.component.css']
})
export class DeleteProductoComponent implements OnInit {
  @Input() idProducto;
  @Input() typeButton;
  @Input() nameButton;
  @Output() modifyProducto = new EventEmitter();

  public modalReference: NgbModalRef;

  constructor( private webService: WebService, private modalService: NgbModal ) { }

  ngOnInit() {
  }

  
  deleteAlumno(){  
    this.webService.deleteProducto(this.idProducto).subscribe(
      response => {
        this.modifyProducto.emit();
        this.modalReference.close();
      }
    )
  }
  
  callModalService(mdProducto) {
  
    this.modalReference = this.modalService.open(mdProducto, { size: 'sm' });
  }
}
