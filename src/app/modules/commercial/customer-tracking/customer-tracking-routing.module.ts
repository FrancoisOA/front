import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerTrackingComponent} from './customer-tracking.component';

const routes: Routes = [
  { path: 'customer-tracking', component: CustomerTrackingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerTrackingRoutingModule { }
