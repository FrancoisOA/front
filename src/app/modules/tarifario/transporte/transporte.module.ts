import { NumbersOnlyDirective } from './../../../directives/numbers-only.directive';
import { AutoFocusDirective } from './../../../directives/auto-focus.directive';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransporteComponent } from './transporte.component';
import { TypeaheadModule, ButtonsModule } from 'ngx-bootstrap';
import { TransporteRoutingModule } from './transporte-routing.module';
import { LocalcargasueltaComponent } from './localcargasuelta/localcargasuelta.component';
import { LocalplataformaComponent } from './localplataforma/localplataforma.component';
import { NacionalcargasueltaComponent } from './nacionalcargasuelta/nacionalcargasuelta.component';
import { NacionalplataformaComponent } from './nacionalplataforma/nacionalplataforma.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    TransporteComponent,
    LocalcargasueltaComponent,
    LocalplataformaComponent,
    NacionalcargasueltaComponent,
    NacionalplataformaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    TransporteRoutingModule,
    AccordionModule.forRoot(),
    TabsModule.forRoot()

  ],

})
export class TransporteModule { }
