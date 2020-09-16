import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
  public nombrePrenda: string;
  public collection: string[] = ['Pantalones Blancos', 'Camiseta Roja'];

  prueba(nombre: string): string {
    this.nombrePrenda = nombre;
    return this.nombrePrenda;
  }

  setArticle(article: string): string[] {
    this.collection.push(article);
    return this.getCollection();
  }

  getCollection(): string[] {
    return this.collection;
  }

  deleteCollection(index: number): string[] {
    this.collection.splice(index, 1);
    return this.getCollection();
  }
}
