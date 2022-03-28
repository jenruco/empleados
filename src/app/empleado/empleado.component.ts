import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  @Input() empleado:Empleado;
  @Input() i:number;
  constructor() { }

  ngOnInit(): void {
  }

  arrayCaract = [''];

  agregarCaract(nuevaC: string) {
    this.arrayCaract.push(nuevaC);
  }

}
