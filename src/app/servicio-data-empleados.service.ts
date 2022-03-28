import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Empleado } from './empleado.model';
import { ServicioEmpleadoService } from './servicio-empleado.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioDataEmpleadosService {
  empleados:Empleado[]=[
    new Empleado("henry", "perez", "Programador", 2000),
    new Empleado("Moises", "perez", "Director", 3000),
    new Empleado("Juan", "Piguabe", "Diseñador", 2100),
  ];
  agregarEmpleadoServ(empleado:Empleado){
    this.servVentana.muestraMensaje("nombre: "+empleado.nombre);
    this.empleados.push(empleado);
    this.dataService.guardarEmpleado(this.empleados);
  }
  editarEmpleadoServ(i:number, empleado:Empleado){
    let empleadoModificado=this.empleados[i];
    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;

  }
  eliminarEmpleadoServ(i:number){
    this.empleados.splice(i,1);    
  }
  encontrarEmpleado(i:number){
    let empleado:Empleado=this.empleados[i];
    return empleado;
  }
  constructor(private servVentana:ServicioEmpleadoService, private dataService:DataService) { }
}
