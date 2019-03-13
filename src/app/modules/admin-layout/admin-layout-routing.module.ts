import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminLayoutComponent} from './admin-layout.component';

const routes: Routes = [
    {
      path: '',
      component: AdminLayoutComponent,
      children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
          { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
          { path: 'commercial', loadChildren: '../commercial/quote/quote.module#QuoteModule' },
          // { path: 'tarifario', loadChildren: 'src/app/modules/tarifario/tarifario.module#TarifarioModule' }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
