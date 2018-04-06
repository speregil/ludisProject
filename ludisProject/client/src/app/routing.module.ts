import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { NavegacionComponent } from './components/navegacion.component';
import { ContenidoComponent }      from './components/contenido.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/navegacion', pathMatch: 'full' },
  { path: 'navegacion', component: NavegacionComponent },
  { path: 'contenido', component: ContenidoComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}