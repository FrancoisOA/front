import { ConceptService } from 'src/app/services/autocomplete/concept.service';
import { ClientService } from './../../../services/autocomplete/client.service';
import { Observable } from 'rxjs';
import { Select } from './../../../models/Select';
import { BsDaterangepickerDirective } from "ngx-bootstrap/datepicker";
import { Almacenaje } from "./../../../models/tarifa/almacenaje";
import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { TarifarioService } from 'src/app/services/tarifario/tarifario.service';
import { TypeaheadMatch } from 'ngx-bootstrap';

@Component({
  selector: "app-almacenaje",
  templateUrl: "./almacenaje.component.html",
  styleUrls: ["./almacenaje.component.css"]
})
export class AlmacenajeComponent implements OnInit {
  //instancias
  public row: Almacenaje;
  myDropDown : string;
  objectAlm: Almacenaje = new Almacenaje();
  private elementLoading;
  private textSearch: string;
  currencies: Array<Select> = [];
  factors: Array<Select> = [];
  vias: Array<Select> = [];

  //lista desplegable

  tipos = ["-", "TERRESTRE", "MARITIMO", "AEREO", "TEMPORAL MARITIMO"];

     //new
     almacenajes: Array<Almacenaje>;
     objectalmacenaje: Almacenaje;

     private searchAgente = false;
     private searchConcepto = false;

       //busqueda live
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



     initTables() {
      this.almacenajes = [];
      this.objectalmacenaje = new Almacenaje;
      this.almacenajes.push(this.objectalmacenaje);
    }

  //modal
  show: boolean = false;
  showtarifaxfactor: boolean = false;
  public deploymentName: any;
  showModal() {
    this.show = !this.show;
  }

  showtarifaxfactorModal() {
    this.showtarifaxfactor = !this.showtarifaxfactor;
  }


  // restriccion en daterangepicker
  minDate: Date;
  constructor(private tarifarioService: TarifarioService,
       private clientService: ClientService,
    private conceptService: ConceptService) {
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

  }

  // daterangerpicker
  @ViewChild(BsDaterangepickerDirective)
  daterangepicker: BsDaterangepickerDirective;

  onSelectClient(event: TypeaheadMatch): void {
    this.objectAlm.almacenaje = event.item;
  }

  onSelectConcept(event: TypeaheadMatch): void {
    this.objectAlm.concepto = event.item;
  }
  //solo numeros
  deleteInputStream(data) {
    return data.target.value = data.target.value.replace(/[^0-9.]/g, '');
  }

  initData() {
    this.tarifarioService.getDataInit().subscribe((response: any) => {
        if (response.status) {

            this.currencies = response.data.currencies;
            this.factors = response.data.factors;
            this.vias = response.data.vias;
        }
    }, error => console.log(error));
}



setTextSearch(event: any): void {
  if (this.specialKeys.indexOf(event.key) !== -1) {
    return;
  }
  this.textSearch = event.target.value;
  this.elementLoading = event.target.nextSibling;

  // if (this.textSearch.length > 0) { this.showLoading(); } else { this.hideLoading(); }



  if (event.target.id === 'search-agente') {
    this.searchAgente = true;
  }

  if (event.target.id === 'search-concepto') {
    this.searchConcepto = true;
  }
}


  newRow() {
    this.row = new Almacenaje();
    this.almacenajes.push(this.row);
  }

  deleteRow(i: number): void {
    this.almacenajes.splice(i, 1);
  }

  ngOnInit() {
    // this.almacenajes.push(new Almacenaje());
       this.initData();
       this.initTables();
  }
}
