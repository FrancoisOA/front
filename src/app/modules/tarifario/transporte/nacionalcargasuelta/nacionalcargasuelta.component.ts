import { BsDaterangepickerDirective } from 'ngx-bootstrap/datepicker';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Nacionalcargasuelta } from 'src/app/models/tarifa/nacionalcargasuelta';

@Component({
  selector: 'app-nacionalcargasuelta',
  templateUrl: './nacionalcargasuelta.component.html',
  styleUrls: ['./nacionalcargasuelta.component.css']
})
export class NacionalcargasueltaComponent implements OnInit {
 //instancias
 public row: Nacionalcargasuelta;
 ncsueltas: Array<Nacionalcargasuelta> = [];

  proveedor_selected: string;
  proveedor: string[] = ['Alabama','Alaska','Arizona','Arkansas'];

  ciudad_origen_selected: string;
  ciudad_origen: string[] = ['Alabama','Alaska','Arizona','Arkansas'];

  ciudad_destino_selected: string;
  ciudad_destino: string[] = ['Alabama','Alaska','Arizona','Arkansas'];


  tipocargas = ['-', 'TERRESTRE', 'MARITIMO', 'AEREO', 'TEMPORAL MARITIMO'];
  servicio = ['-', 'CONSOLIDADO', 'EXPRESO'];
  monedas = ['-', 'SOLES', 'DOLARES', 'EUROS', 'LIBRAS ESTERLINAS'];
  rangos = ['-', 'MINIMO', '+ 45 Kgs', '+ 100 Kgs', '+ 300 Kgs', '+ 500 Kgs', '+ 1000 Kgs'];


 // Category="";
 // agentes=[
 //   {id:1, name:'item 1'},
 //   {id:2, name:'item 2'},
 //   {id:2,  name:'item 3'}
 //   ]


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
   this.row = new Nacionalcargasuelta();
   this.ncsueltas.push(this.row);
 }

  deleteRow(i: number): void {
  this.ncsueltas.splice(i, 1);
 }

 ngOnInit() {
   this.ncsueltas.push(new Nacionalcargasuelta());
 }
}
