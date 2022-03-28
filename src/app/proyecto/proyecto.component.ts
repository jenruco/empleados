import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioDataEmpleadosService } from '../servicio-data-empleados.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  constructor(private router:Router, private empleadoService: ServicioDataEmpleadosService) { 
    this.empleados = this.empleadoService.empleados;
  }
  txtNombre: string = "";
  txtApellido: string = "";
  txtCargo: string = "";
  txtSalario: number = 0;
  empleados: Empleado[] = [];
  agregarEmpleado() {
    let nuevoEmpleado = new Empleado(this.txtNombre, this.txtApellido, this.txtCargo, this.txtSalario);
    this.empleadoService.agregarEmpleadoServ(nuevoEmpleado);
    this.aHome();
  }
  ngOnInit(): void {
  }

  aHome(){
    this.router.navigate(['']);
  }

}
