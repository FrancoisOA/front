
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransporteComponent } from './transporte.component';

const routes: Routes = [
  { path: 'transporte', component: TransporteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 export class TransporteRoutingModule { }
