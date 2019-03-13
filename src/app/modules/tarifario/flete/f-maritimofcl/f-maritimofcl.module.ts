import { NumbersOnlyDirective } from './../../../../directives/numbers-only.directive';

import { AutoFocusDirective } from './../../../../directives/auto-focus.directive';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FMaritimofclComponent } from './f-maritimofcl.component';
import { TypeaheadModule, BsDatepickerModule } from 'ngx-bootstrap';
import { FmaritimofclRoutingModule } from './f-maritimofcl-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    // IMPORTANDO U NMODULO EN ADUANAS.MODULE.TS
    BsDatepickerModule.forRoot(),
    FmaritimofclRoutingModule
  ],
  declarations: [FMaritimofclComponent

  ]

})
export class FMaritimofclModule { }
