import { Concept } from './../../../models/autocomplete/Concept';
import { ClientService } from './../../../services/autocomplete/client.service';
import { PortService } from './../../../services/autocomplete/PortService';
import { Port } from '../../../models/commercial/quote/Port';
import { Observable } from 'rxjs';
import { Tarifa } from 'src/app/models/tarifa/tarifa';
import { Select } from './../../../models/Select';
import { Aduana } from './../../../models/tarifa/aduana';
import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { BsDaterangepickerDirective } from 'ngx-bootstrap/datepicker';
import { TarifarioService } from 'src/app/services/tarifario/tarifario.service';
import { ConceptService } from 'src/app/services/autocomplete/concept.service';
import { TypeaheadMatch } from 'ngx-bootstrap';

@Component({
  selector: 'app-aduanas',
  templateUrl: './aduanas.component.html',
  styleUrls: ['./aduanas.component.css']
})
export class AduanasComponent implements OnInit {

  // instancias
  public row: Aduana;
  public trow: Tarifa;
  private elementLoading;
  focus: Boolean = false;

  private textSearch: string;

  aduanas: Array<Aduana>;
  objectAduana: Aduana = new Aduana();

  //dropdowns
  currencies: Array<Select> = [];
  factors: Array<Select> = [];
  vias: Array<Select> = [];

  myDropDown: string;
  Rangoparakg: string;


  private searchCiudad = false;
  private searchAgente = false;
  private searchConcepto = false;

  //busqueda live
  searchPorts: Observable<any>;
  searchClients: Observable<any>;
  searchConcepts: Observable<any>;

  private specialKeys: Array<string> = [
    ' ',
    'Escape',
    'Tab',
    'End',
    'Home',
    'Enter',
    'F5',
    'ArrowDown',
    'ArrowUp',
    'ArrowLeft',
    'ArrowRight',
    'Shift',
    'Control'
  ];


  // modals
  show = false;
  showtarifa = false;
  objectadua: Aduana;


  constructor(
    private tarifarioService: TarifarioService,
    private portService: PortService,
    private clientService: ClientService,
    private conceptService: ConceptService
  ) {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());

    this.searchConcepts = Observable.create((observer: any) => {
      if (this.textSearch.length > 0) {
        this.conceptService.search(this.textSearch).subscribe(
          (response: any) => {
            // this.hideLoading();
            observer.next(response.data);
          },
          error => console.log('error => ' + error.toString())
        );
      }
    });
    this.searchClients = Observable.create((observer: any) => {
      if (this.textSearch.length > 0) {
        this.clientService.search(this.textSearch).subscribe(
          (response: any) => {
            //  this.hideLoading();
            observer.next(response.data);
          },
          error => console.log('error => ' + error.toString())
        );
      }
    });
    this.searchPorts = Observable.create((observer: any) => {
      if (this.textSearch.length > 0) {
        const port = this.searchCiudad ? this.objectAduana.ciudad.port : 0;
        this.portService.search(this.textSearch, port).subscribe(
          (response: any) => {
            //  this.hideLoading();
            observer.next(response.data);
          },
          error => console.log('error => ' + error.toString())
        );
      }
    });
  }


  // daterangerpicker
  @ViewChild(BsDaterangepickerDirective)
  daterangepicker: BsDaterangepickerDirective;

  // restriccion en daterangepicker
  minDate: Date;

  initTables() {
    this.focus = false;
    this.aduanas = [];
    this.objectadua = new Aduana();
    this.aduanas.push(this.objectadua);
  }

  onSelectPort(event: TypeaheadMatch): void {
    this.objectAduana.ciudad = event.item;
  }
  onSelectClient(event: TypeaheadMatch): void {
    this.objectAduana.agente = event.item;
  }

  onSelectConcept(event: TypeaheadMatch): void {
    this.objectAduana.concepto = event.item;
  }

  showModal() {
    this.show = !this.show;
  }

  showtarifaModal() {
    this.showtarifa = !this.showtarifa;
  }

  // showLoading() {
  //   this.elementLoading.classList.remove('hide');
  //   this.elementLoading.classList.add('show');
  // }
  // hideLoading() {
  //   this.elementLoading.classList.remove('show');
  //   this.elementLoading.classList.add('hide');
  // }


  setTextSearch(event: any): void {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    this.textSearch = event.target.value;
    this.elementLoading = event.target.nextSibling;

    // if (this.textSearch.length > 0) { this.showLoading(); } else { this.hideLoading(); }

    if (event.target.id === 'search-port') {
      this.searchCiudad = true;
    }

    if (event.target.id === 'search-agente') {
      this.searchAgente = true;
    }

    if (event.target.id === 'search-concepto') {
      this.searchConcepto = true;
    }
  }

  // solo numeros
  deleteInputStream(data) {
    return (data.target.value = data.target.value.replace(/[^0-9.]/g, ''));
  }

  initData() {
    this.tarifarioService.getDataInit().subscribe(
      (response: any) => {
        if (response.status) {
          this.currencies = response.data.currencies;
          this.factors = response.data.factors;
          this.vias = response.data.vias;
        }
      },
      error => console.log(error)
    );
  }

  newRow() {
    this.row = new Aduana();
    this.aduanas.push(this.row);
  }

  // nuevoRow() {
  //   this.trow = new Tarifa();
  //   this.tarifas.push(this.trow);
  // }
  // eliminarRow(j: number): void {
  //   this.tarifas.splice(j, 1);
  // }

  deleteRow(i: number): void {
    this.aduanas.splice(i, 1);
  }

  ngOnInit() {
    // this.aduanas.push(new Aduana());
    this.initData();
    this.initTables();
  }
}
