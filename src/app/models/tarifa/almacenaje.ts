import { Client } from './../autocomplete/Client';
import { Concept } from './../autocomplete/Concept';

export class Almacenaje {
  almacenaje: Client;
  via: string;
  tipo: string;
  moneda: string;
  concepto: Concept;
  valor: string;
  factor: string;
  observaciones: string;
  fecha: string;

  constructor() {
    this.almacenaje = new Client();
    this.via = null;
    this.tipo = null;
    this.moneda = null;
    this.concepto = new Concept();
    this.valor = null;
    this.factor = null;
    this.observaciones = null;
    this.fecha = null;
  }
}
