import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  standalone: false,
})
export class ShortenPipe implements PipeTransform {
  transform(value: string | null | undefined, limit = 10): string {
    if (!value) {
      return '';
    }
    if (value.length <= limit) {
      return value;
    }
    return value.substring(0, limit) + ' ...';
  }
}
