import { CatApiService } from './../../../Core/services/Ecomm/CategApi/cat-api.service';
import { Component, inject, OnInit } from '@angular/core';
import { CatProduct } from '../../../Shared/Models/Interfaces/categories';
import { IProduct } from '../../../Shared/Models/Interfaces/product';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  
  CatProducts: CatProduct[] = []

  private catApiService=inject(CatApiService)
ngOnInit(): void {
  this.GetCatProds()
  
}
GetCatProds()
{
  this.catApiService.GetCat().subscribe(
    {
      next:(res)=>{
        this.CatProducts=res.data
        console.log(this.CatProducts)
      },
      error:(err)=>{console.log(err)}
    }
  )
}

}
