import { Pipe, PipeTransform } from '@angular/core';

// Impure pipe (pure: false) so the list re-filters when a new server is
// pushed without changing the array reference. Pure pipes only re-run
// when a primitive input or object reference changes.
@Pipe({
  name: 'filter',
  standalone: false,
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any[] | null | undefined, filterString: string, propName: string): any[] {
    if (!value) {
      return [];
    }
    if (!filterString) {
      return value;
    }
    const filter = filterString.toLowerCase();
    return value.filter((item) => String(item?.[propName] ?? '').toLowerCase().includes(filter));
  }
}
