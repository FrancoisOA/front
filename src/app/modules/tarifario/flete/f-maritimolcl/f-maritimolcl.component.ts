import { Select } from './../../../../models/Select';
import { TarifarioService } from 'src/app/services/tarifario/tarifario.service';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { BsDaterangepickerDirective } from 'ngx-bootstrap';
import { Fmaritimolcl } from 'src/app/models/tarifa/fmaritimolcl';

@Component({
  selector: 'app-f-maritimolcl',
  templateUrl: './f-maritimolcl.component.html',
  styleUrls: ['./f-maritimolcl.component.css']
})
export class FMaritimolclComponent implements OnInit {
  // instancias
  public row: Fmaritimolcl;

  agente_selected: string;
  agente: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas'];

  pais_origen_selected: string;
  pais_origen: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas'];

  puerto_origen_selected: string;
  puerto_origen: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas'];

  pais_destino_selected: string;
  pais_destino: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas'];

  puerto_destino_selected: string;
  puerto_destino: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas'];



  coloaders = ['-', 'Alabama', 'Alaska', 'Arizona', 'Arkansas'];
  tipocargas = ['-', 'TERRESTRE', 'MARITIMO', 'AEREO', 'TEMPORAL MARITIMO'];


  factores = [
    { fac: 'MINIMO' },
    { fac: 'w/m' },
    { fac: '+10 cbm' }
  ];

  //new
  fmaritimolcls: Array<Fmaritimolcl>;
  objectfmaritimolcls: Fmaritimolcl;

  initTables() {
    this.fmaritimolcls = [];
    this.objectfmaritimolcls = new Fmaritimolcl();
    this.fmaritimolcls.push(this.objectfmaritimolcls);
  }


  currencies: Array<Select> = [];

  //modal
  show: boolean = false;
  public deploymentName: any;
  showobsModal() {
    this.show = !this.show;
  }
  showtarifaxfactorModal() {
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

  // daterangerpicker
  @ViewChild(BsDaterangepickerDirective) daterangepicker: BsDaterangepickerDirective;

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
    this.row = new Fmaritimolcl();
    this.fmaritimolcls.push(this.row);
  }

  deleteRow(i: number): void {
    this.fmaritimolcls.splice(i, 1);
  }

  ngOnInit() {
    this.initData();
    this.initTables();
  }
}
