import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CaracteristicaEmpleadoComponent } from './caracteristica-empleado/caracteristica-empleado.component';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { ServicioDataEmpleadosService } from './servicio-data-empleados.service';
import { HomeComponent } from './home/home.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaEmpleadoComponent } from './actualiza-empleado/actualiza-empleado.component';
import { ErrorComponent } from './error/error.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'proyecto',component:ProyectoComponent},
  {path:'quienes',component:QuienesComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'actualiza/:id',component:ActualizaEmpleadoComponent},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    CaracteristicaEmpleadoComponent,
    HomeComponent,
    ProyectoComponent,
    QuienesComponent,
    ContactoComponent,
    ActualizaEmpleadoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [ServicioEmpleadoService ,ServicioDataEmpleadosService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
