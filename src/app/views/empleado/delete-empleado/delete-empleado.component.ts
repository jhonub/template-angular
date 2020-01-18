import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { WebService } from 'src/app/webservice/webservice.service';

@Component({
  selector: 'app-delete-empleado',
  templateUrl: './delete-empleado.component.html',
  styleUrls: ['./delete-empleado.component.css']
})
export class DeleteEmpleadoComponent implements OnInit {
  @Input() idEmpleado;
  @Input() typeButton;
  @Input() nameButton;
  @Output() modifyEmpleado = new EventEmitter();

  public modalReference: NgbModalRef;

  constructor(
    private webService:WebService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  deleteEmpleado(){  
    this.webService.deleteEmpleado(this.idEmpleado).subscribe(
      response => {
        this.modifyEmpleado.emit();
        this.modalReference.close();
      }
    )
  }

  callModalService(mdEmpleado){
    //this.inicializator();
    this.modalReference = this.modalService.open(mdEmpleado, { size: 'sm', backdrop: 'static' });
  }

}
