import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion.component';
import { ContenidoComponent } from './components/contenido.component';
import { NavegacionService } from 'app/components/services/navegacion.service';
import { ContenidoService } from 'app/components/services/contenido.service';



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    NavegacionService,
    ContenidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
