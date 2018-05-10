import { Component, OnInit } from '@angular/core';
import { ContenidoService } from './services/contenido.service';

@Component({
    selector: 'contenido-ruina',
    templateUrl: './views/contenido.ruina.component.html',
    styleUrls: ['./views/assets/bootstrap/css/bootstrap.min.css']
  })

  export class RuinaComponent implements OnInit  {
    constructor(private contenidoService: ContenidoService) {}

    mensaje : String = "";
    ruina = {nombre : "", alt : ""};

    ngOnInit() {}

    crearRuina(){
      var nomRuina = this.ruina.nombre;
      var altRuina = this.ruina.alt;

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

    limpiarFormulario(){
      this.ruina.nombre = "";
      this.ruina.alt = "";
    }
  }