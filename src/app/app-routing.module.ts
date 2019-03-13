import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import { TarifarioComponent } from './modules/tarifario/tarifario.component';

const routes: Routes = [
  { path: '', loadChildren: './modules/admin-layout/admin-layout.module#AdminLayoutModule', canActivate: [AuthGuard] },
  { path: 'web', loadChildren: './modules/web-layout/web-layout.module#WebLayoutModule' },
  { path: 'login', loadChildren: './modules/auth/auth.module#AuthModule' },
  // { path: 'customer-tracking', loadChildren: './modules/commercial/customer-tracking#CustomerTrackingModule' },
	//{ path: 'register', component: RegisterComponent },
  /*{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },*/
  /*{ path: '**', component: Page404Component },*/

  //colocado para que carge la ruta sin necesidad de escribirla en la urlkkkkkkk
    { path: 'tarifario', component: TarifarioComponent , pathMatch: 'full'},


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

