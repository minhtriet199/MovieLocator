import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodeHtmlEntities',
  standalone:true
})
export class DecodeHtmlEntitiesPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/&#(\d+);/g, (match, dec) => {
      return String.fromCharCode(dec);
    });
  }
}
