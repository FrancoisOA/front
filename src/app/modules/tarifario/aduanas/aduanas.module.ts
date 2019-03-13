import { NumbersOnlyDirective } from './../../../directives/numbers-only.directive';
import { AutoFocusDirective } from './../../../directives/auto-focus.directive';
import { TypeaheadModule, BsDatepickerModule } from 'ngx-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AduanasComponent } from './aduanas.component';
import { FormsModule } from '@angular/forms';
import { AduanasRoutingModule } from './aduanas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    // IMPORTANDO U NMODULO EN ADUANAS.MODULE.TS
    BsDatepickerModule.forRoot(),
    AduanasRoutingModule

  ],
  declarations: [AduanasComponent
]
})
export class AduanasModule { }
