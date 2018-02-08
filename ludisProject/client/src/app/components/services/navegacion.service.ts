import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NavegacionService {
  constructor (
    private http: HttpClient
  ) {}

  getRuinas() {
    return this.http.get<{}[]>('http://localhost:3000/api/navegacion/ruinas');
  }

  getAreas(idRuina) {
    const url = 'http://localhost:3000/api/navegacion/areas/' + idRuina;
    return this.http.get<{}[]>(url);
  }

  getArea(idArea) {
    const url = 'http://localhost:3000/api/navegacion/area/' + idArea;
    return this.http.get<{}>(url);
  }
}