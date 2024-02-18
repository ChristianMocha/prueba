import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { FechasComponent } from './pages/fechas/fechas.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PartidoComponent } from './pages/partido/partido.component';

@NgModule({
  declarations: [
    PartidoComponent,
    PublicComponent,
    FechasComponent,
    NavBarComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
  ],
  exports: [
    PartidoComponent,
    PublicComponent,
    FechasComponent,
    NavBarComponent,
    LoadingComponent
  ]
})
export class PublicModule { }
