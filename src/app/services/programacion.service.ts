import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Programacion } from '../core/models/programacion';
import { Fechas } from '../core/models/fechas';

@Injectable({
  providedIn: 'root'
})
export class ProgramacionService {

  urlServer = 'http://186.4.251.123:8083/deportivo/api/deportivo';

  constructor(private http: HttpClient) { }


  getFechas(){
    return this.http.get<Fechas>(`${this.urlServer}/calendario/fechas/0/1`);
  }


  getProgramacion(){
    return this.http.get<Programacion>(`${this.urlServer}/programacion/2/0/0/0/0/20231216`);
  }

  getLogo(logo: string){
    return this.http.get<any>(`http://deportivo2.edbsharks.com/assets${logo}`);
  }
}
