import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByNetwork'
})
export class FilterByNetworkPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
