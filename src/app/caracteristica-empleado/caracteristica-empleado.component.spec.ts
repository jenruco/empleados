import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicaEmpleadoComponent } from './caracteristica-empleado.component';

describe('CaracteristicaEmpleadoComponent', () => {
  let component: CaracteristicaEmpleadoComponent;
  let fixture: ComponentFixture<CaracteristicaEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicaEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristicaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
