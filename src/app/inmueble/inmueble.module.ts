import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmuebleRoutingModule } from './inmueble-routing.module';
import { WebModule } from '../web/web.module';
import { VentanacitaComponent } from './ventanacita/ventanacita.component';








@NgModule({
  declarations: [
    
  
   
  ],
  imports: [
    CommonModule,
    InmuebleRoutingModule,
    WebModule,
    VentanacitaComponent
 
  ],
  exports: [
    WebModule
  ]
})
export class InmuebleModule { }
