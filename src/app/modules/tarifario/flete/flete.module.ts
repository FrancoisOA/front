import { TypeaheadModule, BsDatepickerModule } from 'ngx-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FleteRoutingModule } from './flete-routing.module';
import { FleteComponent } from './flete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    // IMPORTANDO U NMODULO EN ADUANAS.MODULE.TS
    BsDatepickerModule.forRoot(),
    FleteRoutingModule
  ],
  declarations: [FleteComponent]
})
export class FleteModule { }
