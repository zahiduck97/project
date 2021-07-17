import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulosRoutingModule } from './modulos-routing.module';
import { ModulosComponent } from './modulos.component';
import {ToolbarComponent} from "./shared/toolbar/toolbar.component";
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    ModulosComponent,
    ToolbarComponent,
  ],
    imports: [
        CommonModule,
        ModulosRoutingModule,
        SharedModule,
    ]
})
export class ModulosModule { }
