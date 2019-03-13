import { BsDaterangepickerDirective } from 'ngx-bootstrap';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Localplataforma } from 'src/app/models/tarifa/localplataforma';

@Component({
  selector: 'app-localplataforma',
  templateUrl: './localplataforma.component.html',
  styleUrls: ['./localplataforma.component.css']
})
export class LocalplataformaComponent implements OnInit {

  // instancias
  public row: Localplataforma;
  localcargasuelta: Array<Localplataforma> = [];


  //llenado de columna de rango en kilos

  unidades = [
    { uni: 'CONTENEDOR 20' },
    { uni: 'CONTENEDOR 40' },
    { uni: 'PLATAFORMA 20' },
    { uni: 'PLATAFORMA 40' }
  ];

  proveedor_selected: string;
  proveedor: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas'];

  tipocargas = ['-', 'terrestre', 'maritimo', 'aereo', 'temporal aereo'];
  monedas = ['-', 'SOLES', 'DOLARES', 'EUROS', 'LIBRAS ESTERLINAS'];



  //modal
  show1: Boolean = false;
  showModal1() {
    this.show1 = !this.show1;
  }



  // Category='';
  // agentes=[
  //   {id:1, name:'SOLES'},
  //   {id:2, name:'DOLARES'},
  //   {id:2,  name:'EUROS'}
  //   ]



  // add(i: number) {
  //   var indices = [];
  //   var alerts = [
  //     {index : 1,  messages : ''},
  //     {index : 2,  messages : 'Lince, San isidro'},
  //     {index : 3,  messages : 'Ate, comas'},
  //     {index : 4,  messages : 'San Borja, San luis'}
  //     ];
  //

  // }



  // restriccion en daterangepicker
  minDate: Date;
  constructor() {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
  }

  // daterangerpicker
  @ViewChild(BsDaterangepickerDirective)
  daterangepicker: BsDaterangepickerDirective;

  ngOnInit() {
    this.localcargasuelta.push(new Localplataforma());
  }
}

