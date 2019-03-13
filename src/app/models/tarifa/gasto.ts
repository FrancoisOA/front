import { Concept } from './../autocomplete/Concept';
import { Client } from './../autocomplete/Client';
import { Port } from './../commercial/quote/Port';
import { ConnectableObservable } from 'rxjs';
export class Gasto {
   origen: Port;
   destino: Port;
  proveedor: Client;
  via: string;
  concepto: Concept;
  moneda: string;
  valor: string;
  factor: string;
  observaciones: string;
  fecha: string;

  constructor() {

    this.origen  =  new Port();
    this.destino  =    new Port();
    this.proveedor =  new Client();
    this.via =  null;
    this.concepto =  new Concept();
    this.moneda =  null;
    this.valor =  null;
    this.factor =  null;
    this.observaciones =  null;
    this.fecha =  null;
  }
}
