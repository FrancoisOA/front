import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlmacenajeComponent } from './almacenaje.component';

const routes: Routes = [
  { path: 'almacenaje', component: AlmacenajeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 export class AlmacenajeRoutingModule { }
