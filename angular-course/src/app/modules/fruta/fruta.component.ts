import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent implements OnInit {
  public nombreComponente: string;
  public listadoFrutas: Array<string>;
  public nombre: string;
  public edad: number;
  public textToShow: string;

  constructor() {
    this.nombreComponente = 'Componente de fruta';
    this.listadoFrutas = ['Naranja', 'Manzana', 'Pera', 'Sandia'];
    this.nombre = 'Sergio';
    this.edad = 38;
    this.textToShow = '';

    console.log(this.nombreComponente, this.listadoFrutas[0]);
  }

  ngOnInit() {
    this.textToShow = this.createTextToShow(this.nombre, this.edad);
  }

  createTextToShow(nombre: string, edad: number): string {
    let text = '';

    text = `Soy ${nombre} y tengo ${edad} años`;

    return text;
  }
}
