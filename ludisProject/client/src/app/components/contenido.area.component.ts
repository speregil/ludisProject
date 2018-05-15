import { Component, OnInit } from '@angular/core';
import { ContenidoService } from './services/contenido.service';

@Component({
    selector: 'contenido-area',
    templateUrl: './views/contenido.area.component.html',
    styleUrls: ['./views/assets/bootstrap/css/bootstrap.min.css']
  })

  export class AreaComponent implements OnInit  {
    constructor(private contenidoService: ContenidoService) {}

    mensaje : String = "";
    area = {nombre : "", desc : "", alt : "", areaPrev : 0, areaSig : 0, ruina : 0};

    ngOnInit() {}

    crearArea(){
      var nomArea = this.area.nombre;
      var descArea = this.area.desc;
      var altArea = this.area.alt;

      if(nomArea != "" && descArea != "" && altArea != ""){
        
      }
      else
        this.mensaje = "Complete todos los datos, por favor";
    }

    limpiarFormulario(){
      this.area.nombre = "";
      this.area.desc = "";
      this.area.alt = "";
    }
  }