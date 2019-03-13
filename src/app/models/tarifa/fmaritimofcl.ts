export class Fmaritimofcl {
  pais_origen: string;
  pais_destino: string;
  puerto_origen: string;
  puerto_destino: string;
  agente: string; 
  naviera: string;
  tipocarga: string;
  contenedor: string;
  moneda: string;
  tarifaflete: string;
  otrosrecargos: string;
  tt: string;
  ruta: string;
  frecuencia: string;
  condiciones: string;
  observaciones: string;
  vigencia: string;

  constructor() {
    this.pais_origen= null;
    this.pais_destino= null;
    this.puerto_origen= null;
    this.puerto_destino= null;
    this.agente = null;
    this.naviera = null;
    this.tipocarga = null;
    this.contenedor = null;
    this.moneda = null;
    this.tarifaflete = null;
    this.otrosrecargos = null;
    this.tt = null;
    this.ruta = null;
    this.frecuencia = null;
    this.condiciones = null;
    this.observaciones = null;
    this.vigencia = null;
  }
}
