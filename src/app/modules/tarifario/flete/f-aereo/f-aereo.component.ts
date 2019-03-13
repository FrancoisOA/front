import { TarifarioService } from "src/app/services/tarifario/tarifario.service";
import { Select } from "./../../../../models/Select";
import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { Faereo } from "src/app/models/tarifa/faereo";
import { BsDaterangepickerDirective } from "ngx-bootstrap";

@Component({
  selector: "app-f-aereo",
  templateUrl: "./f-aereo.component.html",
  styleUrls: ["./f-aereo.component.css"]
})
export class FAereoComponent implements OnInit {
  // instancias
  public row: Faereo;

  public items: any[];
  public append() {

    let item;
    this.items.push(item);
}

  agente_selected: string;
  agente: string[] = ["Alabama", "Alaska", "Arizona", "Arkansas"];

  pais_origen_selected: string;
  pais_origen: string[] = ["Alabama", "Alaska", "Arizona", "Arkansas"];

  aereopuerto_origen_selected: string;
  aereopuerto_origen: string[] = ["Alabama", "Alaska", "Arizona", "Arkansas"];

  pais_destino_selected: string;
  pais_destino: string[] = ["Alabama", "Alaska", "Arizona", "Arkansas"];

  aereopuerto_destino_selected: string;
  aereopuerto_destino: string[] = ["Alabama", "Alaska", "Arizona", "Arkansas"];

  rangos = [
    { rango: "MINIMO" },
    { rango: "+ 45 Kgs" },
    { rango: "+ 100 Kgs" },
    { rango: "+ 300 Kgs" },
    { rango: "+ 500 Kgs" },
    { rango: "+ 1000 Kgs" }
  ];

  // daterangerpicker
  @ViewChild(BsDaterangepickerDirective)
  daterangepicker: BsDaterangepickerDirective;

  //new
  faereos: Array<Faereo>;
  objectfaereos: Faereo;

  initTables() {
    this.faereos = [];
    this.objectfaereos = new Faereo();
    this.faereos.push(this.objectfaereos);
  }




  currencies: Array<Select> = [];

    //solo numeros
    deleteInputStream(data) {
      return (data.target.value = data.target.value.replace(/[^0-9.]/g, ""));
    }

  //modal
  show: boolean = false;
  showorecargos: boolean = false;
  public deploymentName: any;
  showobsModal() {
    this.show = !this.show;
  }
  showtarifaxfleteModal() {
    this.show = !this.show;
  }
  showotrosrecargosModal() {
    this.showorecargos = !this.showorecargos;
  }

  aerolineas = ["-", "Alabama", "Alaska", "Arizona", "Arkansas"];
  tipocargas = ["-", "?", "?", "?", "? ?"];

  // restriccion en daterangepicker
  minDate: Date;
  constructor(private tarifarioService: TarifarioService) {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
  }

  initData() {
    this.tarifarioService.getDataInit().subscribe(
      (response: any) => {
        if (response.status) {
          this.currencies = response.data.currencies;
        }
      },
      error => console.log(error)
    );
  }

  newRow() {
    this.row = new Faereo();
    this.faereos.push(this.row);
  }

  deleteRow(i: number): void {
    this.faereos.splice(i, 1);
  }

  ngOnInit() {
    // this.faereos.push(new Faereo());
    this.initData();
    this.initTables();
  }
}
