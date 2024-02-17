import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { PartidoComponent } from './pages/partido/partido.component';
import { FechasComponent } from './pages/fechas/fechas.component';

const routes: Routes = [
  {
    path: "",
    component: PublicComponent,
    children: [

      { path: "", component: PartidoComponent },
      { path: "fechas", component: FechasComponent },
    
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
