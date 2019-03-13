
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FMaritimolclComponent } from './f-maritimolcl.component';

const routes: Routes = [
  { path: 'f-maritimolcl', component: FMaritimolclComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 export class FMaritimolclRoutingModule { }
