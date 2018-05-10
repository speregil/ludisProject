import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion.component';
import { ContenidoComponent } from './components/contenido.component';
import { RuinaComponent } from './components/contenido.ruina.component';
import { NavegacionService } from 'app/components/services/navegacion.service';
import { ContenidoService } from 'app/components/services/contenido.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    ContenidoComponent,
    RuinaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    NavegacionService,
    ContenidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
