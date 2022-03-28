import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioDataEmpleadosService } from '../servicio-data-empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulo = 'Lista de Empleados';
  constructor(private empleadoService: ServicioDataEmpleadosService) {
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
  }
  ngOnInit(): void {
  }

}
