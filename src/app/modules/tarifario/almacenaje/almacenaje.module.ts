import { NumbersOnlyDirective } from './../../../directives/numbers-only.directive';
import { AutoFocusDirective } from './../../../directives/auto-focus.directive';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TypeaheadModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlmacenajeComponent } from './almacenaje.component';
import { AlmacenajeRoutingModule } from './almacenaje-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AlmacenajeRoutingModule
  ],
  declarations: [AlmacenajeComponent],
})
export class AlmacenajeModule { }
