
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FAereoComponent } from './f-aereo.component';

const routes: Routes = [
  { path: 'f-aereo', component: FAereoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 export class FaereoRoutingModule { }
