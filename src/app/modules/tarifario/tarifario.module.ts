
import { TarifarioComponent } from "./tarifario.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TarifarioRoutingModule } from "./tarifario-routing.module";
import { AduanasModule } from "./aduanas/aduanas.module";
import { FMaritimofclModule } from "./flete/f-maritimofcl/f-maritimofcl.module";
import { FMaritimolclModule } from "./flete/f-maritimolcl/f-maritimolcl.module";
import { FAereoModule } from "./flete/f-aereo/f-aereo.module";
import { GastosModule } from "./gastos/gastos.module";
import { AlmacenajeModule } from "./almacenaje/almacenaje.module";
import { TransporteModule } from "./transporte/transporte.module";
import { FleteModule } from "./flete/flete.module";
import { AutoFocusDirective } from 'src/app/directives/auto-focus.directive';
import { NumbersOnlyDirective } from 'src/app/directives/numbers-only.directive';

@NgModule({
  declarations: [TarifarioComponent],
  imports: [
    CommonModule,
    TarifarioRoutingModule,
    FleteModule,
    AduanasModule,
    FMaritimofclModule,
    FMaritimolclModule,
    FAereoModule,
    GastosModule,
    AlmacenajeModule,
    TransporteModule,
  ]
})
export class TarifarioModule {}
