import { BsDaterangepickerDirective } from "ngx-bootstrap/datepicker";
import { Localcargasuelta } from "./../../../../models/tarifa/localcargasuelta";
import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-localcargasuelta",
  templateUrl: "./localcargasuelta.component.html",
  styleUrls: ["./localcargasuelta.component.css"]
})
export class LocalcargasueltaComponent implements OnInit {
  // instancias
  public row: Localcargasuelta;
  localcargasuelta: Array<Localcargasuelta> = [];

    // daterangerpicker
    @ViewChild(BsDaterangepickerDirective)
    daterangepicker: BsDaterangepickerDirective;

  //llenado de columna de rango en kilos

  zonas = [
    { rango: '- 45 Kgs' },
    { rango: '+ 45 Kgs' },
    { rango: '+ 100 Kgs' },
    { rango: '+ 300 Kgs' },
    { rango: '+ 500 Kgs' },
    { rango: '+ 1000 Kgs' }
  ];



  proveedor_selected: string;
  proveedor: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas'];

  tipocargas = ['-', 'terrestre', 'maritimo', 'aereo', 'temporal aereo'];
  monedas = ['-', 'SOLES', 'DOLARES', 'EUROS', 'LIBRAS ESTERLINAS'];



  //modal
  show: Boolean = false;
  public deploymentName: any;
  showModal() {
    this.show = !this.show;
  }


  // restriccion en daterangepicker
  minDate: Date;
  constructor() {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
  }



  ngOnInit() {
    this.localcargasuelta.push(new Localcargasuelta());
  }
}
