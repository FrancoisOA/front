import { AutoFocusDirective } from './../../../../directives/auto-focus.directive';
import { NumbersOnlyDirective } from './../../../../directives/numbers-only.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FMaritimolclComponent } from './f-maritimolcl.component';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule, BsDatepickerModule } from 'ngx-bootstrap';
import { FMaritimolclRoutingModule } from './f-maritimolcl-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FMaritimolclRoutingModule],
  declarations: [FMaritimolclComponent]
})
export class FMaritimolclModule { }
