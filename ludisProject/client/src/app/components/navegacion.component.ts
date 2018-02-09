import { Component, OnInit } from '@angular/core';
import { NavegacionService } from './services/navegacion.service';
import { Area } from './models/area.model';

@Component({
  selector: 'navegacion',
  templateUrl: './views/navegacion.component.html',
  styleUrls: ['./views/assets/bootstrap/css/bootstrap.min.css',
              './views/assets/navegacion.component.css']
})

export class NavegacionComponent implements OnInit  {
  constructor(private navegacionService: NavegacionService) {}
  ruinas = [];
  cuerpoAreas = new Array();

  private areasActual = new Array<Area>();

  ngOnInit() {
    this.getRuinas();
  }

  getRuinas(){
    this.navegacionService.getRuinas().subscribe(data => this.ruinas = data);
  }

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

  private encontrarRaices(){
    var raices = new Array<Area>();
    for(var i = 0; i < this.areasActual.length; i++ ){
      var area = this.areasActual[i];
      if(area.areaPrev.length == 0)
        raices.push(area);
    }
    return raices;
  }

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

  private buscarArea(id : String){
    for(var i = 0; i < this.areasActual.length; i++ ){
      if(this.areasActual[i]._id === id)
        return this.areasActual[i]
    }
  }

  private limpiarSeleccion(){
    this.cuerpoAreas = new Array();
    this.areasActual = new Array<Area>();
  }
}