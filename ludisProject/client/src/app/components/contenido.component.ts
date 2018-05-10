import { Component, OnInit } from '@angular/core';
import { ContenidoService } from './services/contenido.service';

@Component({
    selector: 'contenido',
    templateUrl: './views/contenido.component.html',
    styleUrls: ['./views/assets/bootstrap/css/bootstrap.min.css']
  })

  export class ContenidoComponent implements OnInit  {
    constructor(private contenidoService: ContenidoService) {}

    ngOnInit() {}

  }