import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpCliente:HttpClient) { }

  guardarEmpleado(empleado:Empleado[]){
    this.httpCliente.post('https://clientes-ff438-default-rtdb.firebaseio.com/datos.json', empleado).subscribe(
      response=>console.log("empelados guardados: "+response),
      error=>console.log("errod: "+error)
    );
  }
}
