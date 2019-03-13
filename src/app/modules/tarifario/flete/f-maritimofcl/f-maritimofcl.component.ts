import { TarifarioService } from "./../../../../services/tarifario/tarifario.service";

import { Select } from "./../../../../models/Select";
import { BsDaterangepickerDirective } from "ngx-bootstrap/datepicker";
import { Fmaritimofcl } from "./../../../../models/tarifa/fmaritimofcl";
import { Component, OnInit, ViewChild, HostListener } from "@angular/core";

@Component({
  selector: "app-f-maritimofcl",
  templateUrl: "./f-maritimofcl.component.html",
  styleUrls: ["./f-maritimofcl.component.css"]
})
export class FMaritimofclComponent implements OnInit {
  // instancias
  public row: Fmaritimofcl;

  agente_selected: string;
  agente: string[] = ["Alabama", "Alaska", "Arizona", "Arkansas"];

  pais_origen_selected: string;
  pais_origen: string[] = ["Alabama", "Alaska", "Arizona", "Arkansas"];

  puerto_origen_selected: string;
  puerto_origen: string[] = ["Alabama", "Alaska", "Arizona", "Arkansas"];

  pais_destino_selected: string;
  pais_destino: string[] = ["Alabama", "Alaska", "Arizona", "Arkansas"];

  puerto_destino_selected: string;
  puerto_destino: string[] = ["Alabama", "Alaska", "Arizona", "Arkansas"];


  navieras = ["-", "Alabama", "Alaska", "Arizona", "Arkansas"];
  tipocargas = ["-", "TERRESTRE", "MARITIMO", "AEREO", "TEMPORAL MARITIMO"];

  unidades = [
    { uni: "CONTENEDOR 20" },
    { uni: "CONTENEDOR 40" },
    { uni: "PLATAFORMA 20" },
    { uni: "PLATAFORMA 40" }
  ];

    // daterangerpicker
    @ViewChild(BsDaterangepickerDirective)
    daterangepicker: BsDaterangepickerDirective;

  //new
  fmaritimofcls: Array<Fmaritimofcl>;
  objectfmaritimofcls: Fmaritimofcl;

  initTables() {
    this.fmaritimofcls = [];
    this.objectfmaritimofcls = new Fmaritimofcl();
    this.fmaritimofcls.push(this.objectfmaritimofcls);
  }


  currencies: Array<Select> = [];

  //modal
  show: boolean = false;
  public deploymentName: any;
  showobsModal() {
    this.show = !this.show;
  }
  showtarifaxcontenedorModal() {
    this.show = !this.show;
  }

  fnAddDeploytment() {
    alert(this.deploymentName);
  }

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
    this.row = new Fmaritimofcl();
    this.fmaritimofcls.push(this.row);
  }

  deleteRow(i: number): void {
    this.fmaritimofcls.splice(i, 1);
  }

  ngOnInit() {
    this.initData();
    this.initTables();
  }
}
