import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {
  public nombre_componente = 'Componente emplados';

  constructor() {}

  ngOnInit(): void {}
}
