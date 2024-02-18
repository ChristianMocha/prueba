import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Fechas } from 'src/app/core/models/fechas';
import { ProgramacionService } from 'src/app/services/programacion.service';

@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.component.html',
  styleUrls: ['./fechas.component.scss']
})
export class FechasComponent implements OnInit{

  lstFechas: Fechas[] = [];

  constructor(private progrmacionService: ProgramacionService){}

  ngOnInit(): void {
    this.getFechas();
  }


  async getFechas(){
    try {
      let res: any = await firstValueFrom(this.progrmacionService.getFechas());
      this.lstFechas = res;
      console.log(res);  
    } catch (e) {
      console.log(e);
    }

  }


}
