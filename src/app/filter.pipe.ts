import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return (it.name.toLocaleLowerCase().includes(searchText) || it.fatherName.toLocaleLowerCase().includes(searchText)
      || it.motherName.toLocaleLowerCase().includes(searchText) || it.score.toLocaleLowerCase().includes(searchText)
      || it.category.toLocaleLowerCase().includes(searchText) || it.dob.toLocaleLowerCase().includes(searchText));
    });
  }
}