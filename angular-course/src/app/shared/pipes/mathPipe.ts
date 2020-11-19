import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mathPipe' })
export class MathPipe implements PipeTransform {
  transform(value1: number, value2: number): number {
    const result: number = value1 * value2;
    return result;
  }
}
