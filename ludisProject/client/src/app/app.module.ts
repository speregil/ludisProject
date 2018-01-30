import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion.component';
import { NavegacionService } from 'app/components/services/navegacion.service';



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    NavegacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
