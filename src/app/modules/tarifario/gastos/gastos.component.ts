import { Observable } from 'rxjs';
import { PortService } from './../../../services/autocomplete/PortService';
import { ClientService } from './../../../services/autocomplete/client.service';
import { ConceptService } from 'src/app/services/autocomplete/concept.service';
import { Tarifa } from './../../../models/tarifa/tarifa';
import { TarifarioService } from "./../../../services/tarifario/tarifario.service";
import { Select } from "./../../../models/Select";
import { BsDaterangepickerDirective, TypeaheadMatch } from "ngx-bootstrap";
import { Gasto } from "./../../../models/tarifa/gasto";
import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { TabsModule } from "ngx-bootstrap/tabs";
import { Port } from 'src/app/models/commercial/quote/Port';

@Component({
  selector: "app-gastos",
  templateUrl: "./gastos.component.html",
  styleUrls: ["./gastos.component.css"]
})
export class GastosComponent implements OnInit {
  // instancias
  openedestino = true;
  openorigen = false;
  myDropDown: string;

  public row: Gasto;


  private elementLoading;
  private textSearch: string;
  objectGasto: Gasto = new Gasto();



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



  private searchAgente = false;
  private searchConcepto = false;
  private searchDestination = false;


  searchConcepts: Observable<any>;
  searchClients: Observable<any>;
  searchPorts: Observable<any>;



  gastos: Array<Gasto>;
  objectgastos: Gasto;



  initTables() {
    this.gastos = [];
    this.objectgastos = new Gasto();
    this.gastos.push(this.objectgastos);
  }

  currencies: Array<Select> = [];
  factors: Array<Select> = [];
  vias: Array<Select> = [];

  //modal
  show: boolean = false;
  showtarifaxconcepto: boolean = false;
  showModal() {
    this.show = !this.show;
  }

  showtarifaxconceptoModal() {
    this.showtarifaxconcepto = !this.showtarifaxconcepto;
  }

  // restriccion en daterangepicker
  minDate: Date;

  constructor(private tarifarioService: TarifarioService,
    private clientService: ClientService,
    private conceptService: ConceptService,
    private portService: PortService,
    ) {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());


    this.searchConcepts = Observable
    .create((observer: any) => {
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
          const port = this.searchDestination ? this.objectGasto.origen.port : 0;
          this.portService.search(this.textSearch, port)
              .subscribe((response: any) => {
                  // this.hideLoading();
                  observer.next(response.data);
              }, error => console.log('error => ' + error.toString()));
      }
  });


  }

  //solo numeros
  deleteInputStream(data) {
    return (data.target.value = data.target.value.replace(/[^0-9.]/g, ""));
  }



  onSelectClient(event: TypeaheadMatch): void {
    this.objectGasto.proveedor = event.item;
  }

  onSelectConcept(event: TypeaheadMatch): void {
    this.objectGasto.concepto = event.item;
  }

      /********* PORTS ***********/
      onSelectPortOrigin(event: TypeaheadMatch): void {
        this.objectGasto.origen = event.item;
    }
    onSelectPortDestination(event: TypeaheadMatch): void {
        this.objectGasto.destino = event.item;
    }


  // daterangerpicker
  @ViewChild(BsDaterangepickerDirective)
  daterangepicker: BsDaterangepickerDirective;



  setTextSearch(event: any): void {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    this.textSearch = event.target.value;
    this.elementLoading = event.target.nextSibling;

    // if (this.textSearch.length > 0) { this.showLoading(); } else { this.hideLoading(); }

    if (event.target.id === 'search-origin') {
      this.searchDestination = false;
      this.objectGasto.destino = new Port();
  }
  if (event.target.id === 'search-destination')
      this.searchDestination = true;


    if (event.target.id === 'search-agente') {
      this.searchAgente = true;
    }

    if (event.target.id === 'search-concepto') {
      this.searchConcepto = true;
    }
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
    this.objectgastos = new Gasto();
    this.gastos.push(this.objectgastos);
  }




  deleteRow(i: number): void {
    this.gastos.splice(i, 1);
  }

  ngOnInit() {
    // this.gastos.push(new Gasto());
    this.initData();
    this.initTables();
  }
}
