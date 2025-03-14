import { Component } from '@angular/core';
import { IProduct } from '../../../Shared/Models/Interfaces/product';
import { ProductApiService } from './../../../Core/services/Ecomm/ProductApi/product-api.service';
import { inject, OnInit } from '@angular/core';
import { CardComponent } from '../../../Shared/Components/Card/card.component';
import { SearchPipe } from '../../../Shared/Models/Pipes/Search/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CardComponent,SearchPipe,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {


  private productApiService = inject(ProductApiService)
  
    AllProducts : IProduct[] = []
    SearchWord : string= ""

  ngOnInit(): void {
    this.GetAllProducts()
  }
  GetAllProducts()
  {
    this.productApiService.GetProducts().subscribe(
      {
        next : (res)=>{
          this.AllProducts=res.data
          console.log(res.data)
        },
        error : (err)=>{console.log(err)}
      })
  }

}
