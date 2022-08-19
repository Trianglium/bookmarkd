import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTime'
})
export class FilterByTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
