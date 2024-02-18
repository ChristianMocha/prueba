import { Component, OnInit } from '@angular/core';
import { PublicModule } from '../../public.module';
import { ProgramacionService } from 'src/app/services/programacion.service';
import { firstValueFrom } from 'rxjs';
import { Programacion } from 'src/app/core/models/programacion';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.scss']
})
export class PartidoComponent implements OnInit{

  lstPartidos: Programacion[] = [];
  urlimg = environment.urlImages;
  rutaLogoLocal: any;

  constructor(private programacionService: ProgramacionService){}

  ngOnInit(): void {
    this.getPartidos();
    console.log(this.urlimg);
  }


  async getPartidos(){
    console.log('hola mundo');
    try {
      let res: any = await firstValueFrom(this.programacionService.getProgramacion());
      this.lstPartidos = res;
      console.log(this.lstPartidos);  
    } catch (e) {
      console.log(e);
    }

  }

  getLogo(logo: any){
    this.programacionService.getLogo(logo);
  }

 

}
