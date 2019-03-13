import { NumbersOnlyDirective } from './../../../directives/numbers-only.directive';
import { AutoFocusDirective } from './../../../directives/auto-focus.directive';
import { GastosRoutingModule } from './gastos-routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GastosComponent } from './gastos.component';
import { TypeaheadModule, TabsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [GastosComponent],
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot(),
    GastosRoutingModule,
    TabsModule.forRoot()
  ]

})
export class GastosModule { }
