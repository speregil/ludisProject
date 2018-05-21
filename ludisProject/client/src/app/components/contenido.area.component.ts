import { Component, OnInit } from '@angular/core';
import { ContenidoService } from './services/contenido.service';
import { NavegacionService } from './services/navegacion.service';

@Component({
    selector: 'contenido-area',
    templateUrl: './views/contenido.area.component.html',
    styleUrls: ['./views/assets/bootstrap/css/bootstrap.min.css']
  })

  export class AreaComponent implements OnInit  {
    constructor(private contenidoService: ContenidoService, private navegacionService: NavegacionService) {}

    mensaje : String = "";
    areas = [];
    ruinas = [];
    ruinaActual = {};
    seleccion = {nombre : "", desc : "", alt : "", areaPrev : -1, areaSig : -1, ruina : -1};

    ngOnInit() {
      this.getRuinas();
    }
    
    /*
    Pide todas las ruinas presentes en el sistema y las guarda en la variable ruinas
    */
    getRuinas(){
      this.navegacionService.getRuinas().subscribe(data => this.ruinas = data);
    }

    getAreas(){
      var idRuina = this.ruinaActual["_id"];
      if(typeof idRuina != 'undefined'){
        this.navegacionService.getAreas(idRuina).subscribe(data => this.areas = data);
      }
    }

    /*
    Controla el flujo de acciones dependiendo de la selección del usuario
    */
    manejarSeleccion(){
      
    }

    crearArea(){
      var nomArea = this.seleccion.nombre;
      var descArea = this.seleccion.desc;
      var altArea = this.seleccion.alt;

      if(nomArea != "" && descArea != "" && altArea != ""){
        
      }
      else
        this.mensaje = "Complete todos los datos, por favor";
    }

    limpiarFormulario(){
      this.seleccion.nombre = "";
      this.seleccion.desc = "";
      this.seleccion.alt = "";
    }
  }