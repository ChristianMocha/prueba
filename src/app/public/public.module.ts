import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { FechasComponent } from './pages/fechas/fechas.component';


@NgModule({
  declarations: [
    PublicComponent,
    FechasComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
