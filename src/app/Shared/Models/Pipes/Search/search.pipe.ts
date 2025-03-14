import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../Interfaces/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(AllProds : IProduct[] , SearchWord : string):IProduct[]{
   return AllProds.filter(ele=> ele.title.toLocaleLowerCase().includes(SearchWord.toLowerCase()))
  }
}
