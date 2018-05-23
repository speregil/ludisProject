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

  crearArea(id, nomArea, descArea, altArea){
    return this.http.post('http://localhost:3000/api/contenido/area',{nombre: nomArea, desc: descArea, alt: altArea, idRuina: id});
  }

  editarArea(idArea, nomArea, descArea, descAlt){
    return this.http.post('http://localhost:3000/api/contenido/editarArea',{id: idArea, nombre: nomArea, desc: descArea, alt: descAlt});
  }

  asignarArea(actual, siguiente){
    return this.http.post('http://localhost:3000/api/contenido/asignar',{idActual: actual, idSiguiente: siguiente});
  }

  removerArea(actual, siguiente){
    return this.http.post('http://localhost:3000/api/contenido/remover',{idActual: actual, idSiguiente: siguiente});
  }
}