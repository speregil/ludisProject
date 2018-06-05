import { Component, OnInit } from '@angular/core';
import { ContenidoService } from './services/contenido.service';
import { NavegacionService } from './services/navegacion.service';

@Component({
    selector: 'contenido-ruina',
    templateUrl: './views/contenido.ruina.component.html',
    styleUrls: ['./views/assets/navegacion.component.css']
  })

  /*
  Controla todos los servicios asociados con administrar las ruinas en el sistema
  */
  export class RuinaComponent implements OnInit  {
    constructor(private contenidoService: ContenidoService, private navegacionService: NavegacionService) {}

    mensaje : String = ""; //Retroalimentación a las acciones del usuario
    ruinas = [];           //Contiene todas las ruinas presentes en el sistema
    seleccion = {};        //Ruina actual seleccionada por el usuario

    ngOnInit() {
      this.getRuinas();
    }
    
    /*
    Pide todas las ruinas presentes en el sistema y las guarda en la variable ruinas
    */
    getRuinas(){
      this.navegacionService.getRuinas().subscribe(data => this.ruinas = data);
    }

    /*
    Controla el flujo de acciones dependiendo de la selección del usuario
    */
    manejarSeleccion(){
      var id = this.seleccion["_id"];
      var nomRuina = this.seleccion["nombre"];
      var altRuina = this.seleccion["alt"];

      // Crea una nueva ruina si se seleccionó la opción, edita un ruina existente de lo contrario
      if(id < 0){
        this.crearRuina(nomRuina, altRuina);
      }
      else
        this.editarRuina(id, nomRuina, altRuina);
    }

    /*
    Pride la creación de una nueva ruina con los parametros ingresados por el usuario
    nomRuina = nombre de la nueva ruina
    altRuina = Descripción alterna de la nueva ruina
    */
    private crearRuina(nomRuina, altRuina){
      if(nomRuina != "" && altRuina != ""){
        this.contenidoService.crearRuina(nomRuina, altRuina).subscribe(data  => { 
          if(data["status"] > 0)
            this.mensaje = "Error al crear la ruina: " + data["error"];
          else{
            var area = data["data"];
            this.mensaje = "Ruina '" + area["nombre"] + "' creada exitosamente";
            this.limpiarFormulario();
          }
        });
      }
      else
        this.mensaje = "Complete todos los datos, por favor";
    }

    /*
    Pide la edición de la información de la ruina seleccionada por el usuario
    id = identificador de la ruina seleccionada
    nomRuina = nuevo nombre de la ruina
    altRuina = nueva descripción alterna de la ruina
    */
    private editarRuina(id, nomRuina, altRuina){
      if(nomRuina != "" && altRuina != ""){
        this.contenidoService.editarRuina(id, nomRuina, altRuina).subscribe(resp => {
          this.mensaje = resp["mensaje"];
        })
      }
      else
        this.mensaje = "Complete todos los datos, por favor";
    }

    /*
    Limpia la selección actual del usuario
    */
    limpiarFormulario(){
      this.seleccion["nombre"] = "";
      this.seleccion["alt"] = "";
    }
  }