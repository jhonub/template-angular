import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebService } from 'src/app/webservice/webservice.service';
@Component({
  selector: 'app-create-empleado',
  templateUrl: './create-empleado.component.html',
  styleUrls: ['./create-empleado.component.css']
})
export class CreateEmpleadoComponent implements OnInit {
  @Input() idEmpleado;
  @Input() typeButton;
  @Input() nameButton;
  @Output() modifyEmpleado = new EventEmitter();


  public formEmpleado : FormGroup;
  public formValidStatus : Boolean;
  public modalReference: NgbModalRef;
  public listProdutos: any;

  get formValidator(){ return this.formEmpleado.controls; }

  constructor(
    private webService: WebService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }
  inicializator(){
    this.formValidStatus = false;
    this.inicializatorFormEmpleado();
    if(this.idEmpleado != null){
      this.inicializatorEditEmpleado();
    }
  }

  inicializatorFormEmpleado(){
    this.formEmpleado = this.formBuilder.group({
      dni:['', Validators.required],
      apellidoPaterno:['', Validators.required],
      apellidoMaterno:['', Validators.required],
      nombres:['', Validators.required],
      telefono:['', Validators.required],
      direccion:['', Validators.required]
    })
  }
  inicializatorEditEmpleado(){
    this.webService.getByIdEmpleado(this.idEmpleado).subscribe(
      response => {
        this.validatorEditEmpleado(response);
      },
      error => {
        console.log(error);
      }
    )
  }

  saveSubmitEmpleado(){
    this.formValidStatus = true;
    if(this.formEmpleado.invalid){
      return;
    }
    if(this.idEmpleado != null){
      this.updateEmpleado();
    }
    else{
      this.saveEmpleado();
    }
  }

  saveEmpleado(){
    this.webService.postEmpleado(this.formEmpleado.value).subscribe(
      response => {
        this.modifyEmpleado.emit(this.formEmpleado.value);
        this.modalReference.close();
      },
      error => {
        console.log(error);
      }

    )
  }

  updateEmpleado(){
    this.webService.putEmpleado(this.idEmpleado, this.formEmpleado.value).subscribe(
      response => {
        this.modifyEmpleado.emit(this.formEmpleado.value);
        this.modalReference.close();
      },
      error => {
        console.log(error);
      }
    )
  }
  validatorEditEmpleado(empleado) {

    this.formEmpleado.get('dni').setValue(empleado.dni);
    this.formEmpleado.get('apellidoPaterno').setValue(empleado.apellidoPaterno);
    this.formEmpleado.get('apellidoMaterno').setValue(empleado.apellidoMaterno);
    this.formEmpleado.get('nombres').setValue(empleado.nombres);
    this.formEmpleado.get('telefono').setValue(empleado.telefono);
    this.formEmpleado.get('direccion').setValue(empleado.direccion);
  }

  callModalService(mdEmpleado){
    this.inicializator();
    this.modalReference = this.modalService.open(mdEmpleado, { size: 'lg', backdrop: 'static' });
  }

}
