
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FMaritimofclComponent } from './f-maritimofcl.component';


const routes: Routes = [
  { path: 'f-maritimofcl', component: FMaritimofclComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 export class FmaritimofclRoutingModule { }
