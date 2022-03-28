import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-caracteristica-empleado',
  templateUrl: './caracteristica-empleado.component.html',
  styleUrls: ['./caracteristica-empleado.component.css']
})
export class CaracteristicaEmpleadoComponent implements OnInit {

  @Output() caracteristicasEmpleado = new EventEmitter<string>();
  constructor(private miServicio:ServicioEmpleadoService) { }

  ngOnInit(): void {
  }

  agregaNuevaCaract(value: string) {
    this.miServicio.muestraMensaje(value);
    this.caracteristicasEmpleado.emit(value);
  }
}
