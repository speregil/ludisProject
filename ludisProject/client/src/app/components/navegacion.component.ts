import { Component, OnInit } from '@angular/core';
import { NavegacionService } from './services/navegacion.service';

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

  ngOnInit() {
    this.getRuinas();
  }

  getRuinas(){
    this.navegacionService.getRuinas().subscribe(data => this.ruinas = data);
  }

  getAreas(idRuina){
    this.navegacionService.getAreas(idRuina).subscribe(data => { 
      var areas = [];
      var areasRaiz = new Array();
      areas = data;
      // Encuentra las areas raiz
      for(var i = 0; i < areas.length;  i++){
        var previos = areas[i].areaPrev; 
        if(previos.length == 0)
          areasRaiz.push(areas[i]);  
      }

      
    });
  }

  private organizarAreas(raiz : Array<{}>){
    
  }
}