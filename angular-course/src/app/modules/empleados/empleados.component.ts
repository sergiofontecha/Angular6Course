import { Component, OnInit } from '@angular/core';

import { Empleado } from './empleado.model';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {
  public nombreComponente: string;
  public fichaEmpleados: Array<Empleado>;
  public trabajadorExterno: boolean;
  public employeeType: string;

  constructor() {
    this.nombreComponente = 'Componente Emplados';
    this.fichaEmpleados = [
      new Empleado('Sergio', 38, 'Frontend Developer', false),
      new Empleado('Bruno', 36, 'Designer', true),
      new Empleado('David', 39, 'CTO', true)
    ];
    this.trabajadorExterno = false;
  }

  ngOnInit(): void {}
}
