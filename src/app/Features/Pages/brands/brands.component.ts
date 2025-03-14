import { IBrands } from '../../../Shared/Models/Interfaces/Brands';
import { BrandService } from './../../../Core/services/Ecomm/BrandApi/brand.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {
  private BrandService= inject(BrandService)
  Brands : IBrands[] = []

ngOnInit(): void {
  this.GetBrands()
  
}
GetBrands()
{
  this.BrandService.GetBrands().subscribe(
    {
      next : (res)=>{
        
        this.Brands=res.data
        console.log(this.Brands)
      },
      error : (err)=>{console.log(err)}
    })

}

}
