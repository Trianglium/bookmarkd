import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByPopular'
})
export class FilterByPopularPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
