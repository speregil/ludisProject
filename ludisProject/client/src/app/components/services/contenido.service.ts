import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContenidoService {
  constructor (
    private http: HttpClient
  ) {}
}