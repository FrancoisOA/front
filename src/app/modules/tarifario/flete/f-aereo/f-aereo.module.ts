import { NumbersOnlyDirective } from './../../../../directives/numbers-only.directive';
import { AutoFocusDirective } from './../../../../directives/auto-focus.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAereoComponent } from './f-aereo.component';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule, BsDatepickerModule } from 'ngx-bootstrap';
import { FaereoRoutingModule } from './f-aereo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FaereoRoutingModule,

  ],
  declarations: [FAereoComponent]
})
export class FAereoModule { }
