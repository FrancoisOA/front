import { BsDaterangepickerDirective } from 'ngx-bootstrap';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Nacionalplataforma } from 'src/app/models/tarifa/nacionalplataforma';

@Component({
  selector: 'app-nacionalplataforma',
  templateUrl: './nacionalplataforma.component.html',
  styleUrls: ['./nacionalplataforma.component.css']
})
export class NacionalplataformaComponent implements OnInit {
//instancias
public row: Nacionalplataforma;
nacionalplataformas: Array<Nacionalplataforma> = [];


cabeceras = ['PROVEEDOR', 'TIPO DE CARGA', 'CIUDAD ORIGEN', 'CIUDAD DESTINO','MONEDA','EQUIPO','FLETE', 'RECARGOS', 'OBS','FECHA',''];


agente_selected: string;
agente: string[] = ['Alabama','Alaska','Arizona','Arkansas'];

 ciudad_origen_selected: string;
 ciudad_origen: string[] = ['Alabama','Alaska','Arizona','Arkansas'];

 ciudad_destino_selected: string;
 ciudad_destino: string[] = ['Alabama','Alaska','Arizona','Arkansas'];

 tipocargas = ['-', 'TERRESTRE', 'MARITIMO', 'AEREO', 'TEMPORAL MARITIMO'];

 vias = ['-', 'TERRESTRE', 'MARITIMO', 'AEREO', 'TEMPORAL MARITIMO'];
 equipos = ['-', 'contenedor 20', 'contenedor 40', 'plataforma 20', 'plataforma 40'];
 monedas = ['-', 'SOLES', 'DOLARES', 'EUROS', 'LIBRAS ESTERLINAS'];

// Category="";
// agentes=[
//   {id:1, name:'item 1'},
//   {id:2, name:'item 2'},
//   {id:2,  name:'item 3'}
//   ]


  //modal
  show: boolean = false;
  public deploymentName: any;
  showModal() {
    this.show = !this.show;
  }
  fnAddDeploytment() {
    alert(this.deploymentName);
  }



// restriccion en daterangepicker
minDate: Date;
constructor() {
  this.minDate = new Date();
  this.minDate.setDate(this.minDate.getDate());
  }

// daterangerpicker
@ViewChild(BsDaterangepickerDirective) daterangepicker: BsDaterangepickerDirective;

// @HostListener('window:scroll')
// onScrollEvent() {
//   this.daterangepicker.hide();
// }

newRow() {
  this.row = new Nacionalplataforma();
  this.nacionalplataformas.push(this.row);
}

 deleteRow(i: number): void {
 this.nacionalplataformas.splice(i, 1);
}

ngOnInit() {
  this.nacionalplataformas.push(new Nacionalplataforma());
}
}
