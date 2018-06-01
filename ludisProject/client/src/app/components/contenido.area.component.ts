import { Component, OnInit } from '@angular/core';
import { ContenidoService } from './services/contenido.service';
import { NavegacionService } from './services/navegacion.service';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

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
    seleccion = {_id: -1, nombre : "", descripcion : "", descripcionAlt : "", areaPrev : [], areaSig : [], ruina : -1};
    asignacion = {_id: -1, nombre : "", descripcion : "", descripcionAlt : "", areaPrev : [], areaSig : [], ruina : -1};

    ngOnInit() {
      this.getRuinas();
    }
    
    /*
    Pide todas las ruinas presentes en el sistema y las guarda en la variable ruinas
    */
    getRuinas(){
      this.navegacionService.getRuinas().subscribe(data => this.ruinas = data);
    }

    manejarSeleccionRuina(){
      var idRuina = this.ruinaActual["_id"];
      this.seleccion.ruina = idRuina;
      this.getAreas(idRuina);
    }

    private getAreas(idRuina){
      if(typeof idRuina != 'undefined'){
        this.navegacionService.getAreas(idRuina).subscribe(data => this.areas = data);
      }
    }

    manejarSeleccionArea(){
      var id = this.seleccion["_id"];
      var nomArea = this.seleccion.nombre;
      var descArea = this.seleccion.descripcion;
      var altArea = this.seleccion.descripcionAlt;
      var idRuina = this.ruinaActual["_id"];

      // Crea una nueva area si se seleccionó la opción, edita un área existente de lo contrario
      if(id < 0){
        this.crearArea(nomArea, descArea, altArea, idRuina);
      }
      else
        this.editarArea(id, nomArea, descArea, altArea);
    }

    getAreasAdyacentes(){
      this.getAreasPrev().then((resp:any)=>{
        this.seleccion.areaPrev = resp;
      });
      this.getAreasSig().then((resp: any)=>{
        this.seleccion.areaSig = resp;
      });
    }

    private getAreasPrev (){
      let observables: Observable<{}>[] = [];
      var prev = this.seleccion.areaPrev;
      var resp : {}[] = [prev.length];
      
      return new Promise(resolve => {
        for (let i = 0; i < prev.length; i++) {
          observables.push(this.navegacionService.getArea(prev[i]));
        }
  
        forkJoin(observables).subscribe(dataArray => {
          for(var i = 0; i < dataArray.length; i++){
            resp[i] = dataArray[i];
          }
          resolve(resp);
        });
      });
    }

    private getAreasSig(){
      let observables: Observable<{}>[] = [];
      var sig = this.seleccion.areaSig;
      var resp : {}[] = [sig.length];
      
      return new Promise(resolve => {
        for (let i = 0; i < sig.length; i++) {
          observables.push(this.navegacionService.getArea(sig[i]));
        }

        forkJoin(observables).subscribe(dataArray => {
          for(var i = 0; i < dataArray.length; i++){
            resp[i] = dataArray[i];
          }
          resolve(resp);
        });
      });
    }

    private crearArea(nomArea, descArea, altArea, idRuina){
      if(nomArea != "" && descArea != "" && altArea != ""){
        if(typeof idRuina == 'string'){
          this.contenidoService.crearArea(idRuina, nomArea, descArea, altArea).subscribe(data=>{
            if(data["status"] > 0)
              this.mensaje = "Error al crear el area: " + data["error"];
            else{
              var area = data["data"];
              this.mensaje = "Area '" + area["nombre"] + "' creada exitosamente";
              this.limpiarFormulario();
            }
          });
        }
        else{
          this.mensaje = "Seleccione una ruina, por favor";
        }
      }
      else
        this.mensaje = "Complete todos los datos, por favor";
    }

    private editarArea(id, nomArea, descArea, altArea){
      if(nomArea != "" && descArea != "" && altArea != ""){
        this.contenidoService.editarArea(id, nomArea, descArea, altArea).subscribe(resp => {
          this.mensaje = resp["mensaje"];
        });
      }
      else
        this.mensaje = "Complete todos los datos, por favor";
    }

    asignarArea(){
      var idActual = this.seleccion._id;
      var idSiguiente = this.asignacion._id;
      if(typeof idActual == 'string' && typeof idSiguiente == 'string'){
        this.contenidoService.asignarArea(idActual, idSiguiente).subscribe(data => {
          if(data["status"] < 0)
              this.mensaje = "Error en la asignacion: " + data["error"];
          else if(data["status"] = 0)
              this.mensaje = "Algo salio mal. Es probable que no se haya hecho ninguna modificación"       
          else
              this.mensaje = "Asignación exitosa";
        });
      }
      else
        this.mensaje = "Debe seleccionar una ruina y un área a la cual asignar";
    }

    removerArea(){
      var idActual = this.seleccion._id;
      var idSiguiente = this.asignacion._id;
      if(typeof idActual == 'string' && typeof idSiguiente == 'string'){
        this.contenidoService.removerArea(idActual, idSiguiente).subscribe(data => {
          if(data["status"] < 0)
              this.mensaje = "Error en la operacion: " + data["error"];
          else if(data["status"] = 0)
              this.mensaje = "Algo salio mal. Es probable que no se haya hecho ninguna modificación"       
          else
              this.mensaje = "Área removida exitosamente";
        });
      }
      else
        this.mensaje = "Debe seleccionar una ruina y un área que remover";
    }

    limpiarFormulario(){
      this.seleccion.nombre = "";
      this.seleccion.descripcion = "";
      this.seleccion.descripcionAlt = "";
      this.seleccion.areaPrev = [];
      this.seleccion.areaSig = [];
    }
  }