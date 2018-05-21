import { Component, OnInit } from '@angular/core';
import { NavegacionService } from './services/navegacion.service';
import { Area } from './models/area.model';

@Component({
  selector: 'navegacion',
  templateUrl: './views/navegacion.component.html',
  styleUrls: ['./views/assets/bootstrap/css/bootstrap.min.css',
              './views/assets/navegacion.component.css']
})

/*
Controla las funcionalidades de navegación y visualización de contenidos en el sistema
*/
export class NavegacionComponent implements OnInit  {
  
  constructor(private navegacionService: NavegacionService) {}
  
  ruinas = [];                              // Conjunto de ruinas registradas en el sistema
  cuerpoAreas = new Array();                // Areas organizadas para visualizacion que conforman la ruina actual seleccionada

  private areasActual = new Array<Area>();  // Conjunto de areas de la ruina actual

  ngOnInit() {
    this.getRuinas();
  }

  /*
  Pide un arreglo con todas las ruinas registradas y las guarda en ruinas
  */
  getRuinas(){
    this.navegacionService.getRuinas().subscribe(data => this.ruinas = data);
  }

  /*
  Pide un arreglo con todas las areas de la ruina que recibe por parametro y las organiza para su visualización
  idRuina = Ruina seleccionada
  */
  getAreas(idRuina){
    this.limpiarSeleccion();
    this.navegacionService.getAreas(idRuina).subscribe(data => { 
      var areas = [];
      areas = data;
      // Mapea los resultados del servicio con el modelo local de Area para poder hacer operaciones
      // La consulta de las areas asociadas a la ruina actual queda en la propiedad areasActual
      for(var i = 0; i < areas.length; i++ ){
        var modelo = new Area();
        modelo._id = areas[i]._id;
        modelo.nombre = areas[i].nombre;
        modelo.descripcion = areas[i].descripcion;
        modelo.descripcionAlt = areas[i].descripcionAlt;
        modelo.areaPrev = areas[i].areaPrev;
        modelo.areaSig = areas[i].areaSig;
        modelo.ruina = areas[i].ruina;
        this.areasActual.push(modelo);
      }

      //Inicializa el cuerpo de areas con las raices, luego puebla el arreglo
      var raices = this.encontrarRaices()
      this.cuerpoAreas.push(raices);
      this.organizarAreas(raices);
    });
  }

  /*
    Busca todas las areas iniciales del conjunto actual de areas consultadas
    Las areas deben estar en la variable areasActuales
  */
  private encontrarRaices(){
    var raices = new Array<Area>();
    for(var i = 0; i < this.areasActual.length; i++ ){
      var area = this.areasActual[i];
      if(area.areaPrev.length == 0)
        raices.push(area);
    }
    return raices;
  }

  /*
  Función recursiva que organiza las areas de tal manera que se respete el orden en que estan relacionadas
  zonaActual = Area que actualmente se está organizando, La recursión incia con las raices
  */
  private organizarAreas(zonaActual : Array<Area>){
    var nuevaZona = new Array<Area>();
    for(var i = 0; i < zonaActual.length; i++ ){
      var siguientes = zonaActual[i].areaSig;
      for(var j = 0; j < siguientes.length; j++){
        var areaSiguiente = this.buscarArea(siguientes[j]);
        if(areaSiguiente != null)
          nuevaZona.push(areaSiguiente);
      }
    }

    if(nuevaZona.length > 0){
      this.cuerpoAreas.push(nuevaZona);
      this.organizarAreas(nuevaZona);
    }
  }

  /*
  Extrae un area con un id particular del arreglo areasActual
  id = identificador del area a extraer
  */
  private buscarArea(id : String){
    for(var i = 0; i < this.areasActual.length; i++ ){
      if(this.areasActual[i]._id === id)
        return this.areasActual[i]
    }
  }

  /*
  Limpia la selección hecha por el usuario
  */
  private limpiarSeleccion(){
    this.cuerpoAreas = new Array();
    this.areasActual = new Array<Area>();
  }
}