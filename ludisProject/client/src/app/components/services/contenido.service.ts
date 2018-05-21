import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContenidoService {
  constructor (
    private http: HttpClient
  ) {}

  crearRuina(nomRuina, altRuina){
    return this.http.post<{}>('http://localhost:3000/api/contenido/ruina',{nombre: nomRuina, alt: altRuina});
  }

  editarRuina(idRuina, nomRuina, altRuina){
    return this.http.post('http://localhost:3000/api/contenido/editarRuina',{id: idRuina, nombre: nomRuina, alt: altRuina});
  }
}