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
  areas = [];

  ngOnInit() {
    this.getRuinas();
  }

  getRuinas(){
    this.navegacionService.getRuinas().subscribe(data => this.ruinas = data);
  }

  getAreas(idRuina){
    this.navegacionService.getAreas(idRuina).subscribe(data => this.areas = data);
  }
}