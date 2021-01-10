import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipo } from '../interfaces/equipo.interface';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: Equipo[] = [];
  cargada = false;

  constructor( private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
    
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) => {
          this.cargada = true;
          this.info = resp;
        });
  }

  private cargarEquipo() {
    this.http.get('https://angular-portafolio-850e3-default-rtdb.firebaseio.com/equipo.json')
        .subscribe( (resp: Equipo[]) => {
          this.equipo = resp;
          console.log(resp);
        })
  }
}
