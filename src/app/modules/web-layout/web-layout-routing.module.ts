import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WebLayoutComponent} from './web-layout.component';

const routes: Routes = [
    {
      path: '',
      component: WebLayoutComponent,
      children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
          { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
          { path: 'commercial', loadChildren: '../commercial/quote/quote.module#QuoteModule' },
          { path: 'customer-tracking', loadChildren: '../commercial/customer-tracking/customer-tracking.module#CustomerTrackingModule' },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebLayoutRoutingModule { }
