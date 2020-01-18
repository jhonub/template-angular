import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebService } from 'src/app/webservice/webservice.service';


@Component({
  selector: 'create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent implements OnInit {
  @Input() idProducto;
  @Input() typeButton;
  @Input() nameButton;
  @Output() modifyProducto = new EventEmitter();
  
  public productoForm : FormGroup;
  public formProductoValidStatus : Boolean;
  public modalReference: NgbModalRef;
  public listProdutos: any;

  get formValidator(){ return this.productoForm.controls; }

  constructor(private webService: WebService, private modalService: NgbModal, private formBuilder: FormBuilder ) { }

  ngOnInit() {

  }

  inicializator(){
    this.formProductoValidStatus = false;
    this.listProdutos = [];
    this.inicializatorFormProducto();
    if(this.idProducto != null){
      this.inicializatorEditProducto();
    }
  }
  inicializatorEditProducto(){
    this.webService.getByIdProducto(this.idProducto).subscribe(
      response => {
        this.validatorEditProducto(response);
      },
      error => {
        console.log(error);
      }
    )
  }
  inicializatorFormProducto(){
    this.productoForm = this.formBuilder.group({
      codBar:['', Validators.required],
      cantidad:['', Validators.required],
      nombre:['', Validators.required],
      imagenUrl:['', Validators.required],
      precio:['', Validators.required]
    })
  }

  saveSubmitProducto(){
    this.formProductoValidStatus= true;
    if(this.productoForm.invalid){
      return;
    }
    if(this.idProducto != null){
      this.updateProducto();
    }
    else{
      this.saveProducto();
    }
  }

  saveProducto(){
    this.webService.postProducto(this.productoForm.value).subscribe(
      response => {
        this.modifyProducto.emit(this.productoForm.value);
        this.modalReference.close();
      },
      error => {
        console.log(error);
      }
    )
  }
  updateProducto(){
    this.webService.putProducto(this.idProducto, this.productoForm.value).subscribe(
      response => {
        this.modifyProducto.emit(this.productoForm.value);
        this.modalReference.close();
      },
      error => {
        console.log(error);
      }
    )
  }
  validatorEditProducto(producto) {
    this.productoForm.get('codBar').setValue(producto.codBar);
    this.productoForm.get('cantidad').setValue(producto.cantidad);
    this.productoForm.get('nombre').setValue(producto.nombre);
    this.productoForm.get('imagenUrl').setValue(producto.imagenUrl);
    this.productoForm.get('precio').setValue(producto.precio);
  }
  

  callModalService(mdProducto){
    this.inicializator();
    this.modalReference = this.modalService.open(mdProducto, { size: 'lg', backdrop: 'static' });
  }

}
