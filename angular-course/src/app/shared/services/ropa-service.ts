import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
  public nombrePrenda: string;

  prueba(nombre: string): string {
    this.nombrePrenda = nombre;
    return this.nombrePrenda;
  }
}
