import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioDataEmpleadosService } from '../servicio-data-empleados.service';

@Component({
  selector: 'app-actualiza-empleado',
  templateUrl: './actualiza-empleado.component.html',
  styleUrls: ['./actualiza-empleado.component.css']
})
export class ActualizaEmpleadoComponent implements OnInit {

  constructor(private router: Router, private empleadoService: ServicioDataEmpleadosService, private route: ActivatedRoute) {
    this.empleados = this.empleadoService.empleados;
  }

  ngOnInit(): void {
    this.i = this.route.snapshot.params['id'];
    let empleado: Empleado = this.empleadoService.encontrarEmpleado(this.i);
    this.txtNombre = String(empleado.nombre);
    this.txtApellido = String(empleado.apellido);
    this.txtCargo = String(empleado.cargo);
    this.txtSalario = empleado.salario;

    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
  }

  txtNombre: string = "";
  txtApellido: string = "";
  txtCargo: string = "";
  txtSalario: number = 0;
  empleados: Empleado[] = [];
  accion: number;
  i: number = 0;
  /*editarEmpleado() {
    let nuevoEmpleado = new Empleado(this.txtNombre, this.txtApellido, this.txtCargo, this.txtSalario);
    this.empleadoService.editarEmpleadoServ(this.i, nuevoEmpleado);
    this.aHome();
  }
  eliminarEmpleado(){
    this.empleadoService.eliminarEmpleadoServ(this.i);
    this.aHome();
  }*/
  actualizaEmpleado() {
    if (this.accion == 1) {
      let nuevoEmpleado = new Empleado(this.txtNombre, this.txtApellido, this.txtCargo, this.txtSalario);
      this.empleadoService.editarEmpleadoServ(this.i, nuevoEmpleado);
      this.aHome();
    } else {

      this.empleadoService.eliminarEmpleadoServ(this.i);
      this.aHome();

    }
  }
  aHome() {
    this.router.navigate(['']);
  }

}
