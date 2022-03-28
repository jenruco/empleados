import { TestBed } from '@angular/core/testing';

import { ServicioDataEmpleadosService } from './servicio-data-empleados.service';

describe('ServicioDataEmpleadosService', () => {
  let service: ServicioDataEmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDataEmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
