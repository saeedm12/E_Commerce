import { RouterOutlet } from '@angular/router';
import { IProduct } from '../../../Shared/Models/Interfaces/product';
import { ProductApiService } from './../../../Core/services/Ecomm/ProductApi/product-api.service';
import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../../Shared/Components/Card/card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SearchPipe } from '../../../Shared/Models/Pipes/Search/search.pipe';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-home',
  imports: [CardComponent,CarouselModule,SearchPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private productApiService = inject(ProductApiService)

  AllProducts : IProduct[] = []
  SearchWord : string= ""

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    rtl : true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }


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
