import { AutoFocusDirective } from './directives/auto-focus.directive';
import { NumbersOnlyDirective } from 'src/app/directives/numbers-only.directive';

import { QuoteModule } from './modules/commercial/quote/quote.module';
import { CustomerTrackingModule } from './modules/commercial/customer-tracking/customer-tracking.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RefreshTokenInterceptorService } from './helpers/refresh-token-interceptor.service';
/* My Modules */
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from './guards/auth.guard';
// import { ComponentsComponent } from './modules/tarifario/components/components.component';

import { TypeaheadModule, TooltipModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TarifarioModule } from './modules/tarifario/tarifario.module';
@NgModule({
  //SOLO IMPORTAR COMPONENTES
  declarations: [
    AppComponent,
    AutoFocusDirective,
    NumbersOnlyDirective
  ],
  //SOLO IMPORTAR MODULOS
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
     TarifarioModule,
     CustomerTrackingModule,
     QuoteModule,


    //para habilitar typeheadModule en los imputs, tabs
    FormsModule,
    TypeaheadModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot()

  ],
  providers: [
    AuthGuard,
    /*{ provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptorService, multi: true },*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
