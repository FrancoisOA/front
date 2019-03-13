import { Concept } from './../autocomplete/Concept';
import { Client } from './../autocomplete/Client';
import { User } from 'src/app/models/user';
import { Port } from '../commercial/quote/Port';


export class Aduana {
  ciudad: Port;
  agente: Client;
  via: string;
  regimen: string;
  concepto: Concept;
  moneda: string;
  observaciones: string;
  fecha: string;



  constructor() {

    this.ciudad = new Port();
    this.agente = new Client();
    this.concepto = new Concept();
    this.via = null;
    this.regimen = null;
    this.moneda = null;
    this.observaciones = null;
    this.fecha = null;
  }
}
