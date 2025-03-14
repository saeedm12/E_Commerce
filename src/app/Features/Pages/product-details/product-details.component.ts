import { ToastrService } from 'ngx-toastr';
import { CartApiService } from './../../../Core/services/Ecomm/CartApi/cart-api.service';
import { ProductApiService } from './../../../Core/services/Ecomm/ProductApi/product-api.service';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../Shared/Models/Interfaces/product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute)
  private productApiService = inject(ProductApiService)
  private cartApiService = inject(CartApiService)
  private toastrService = inject(ToastrService)
  pID : string | null = ""
  SpecProd!: IProduct;


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (p)=>{
       this.pID = p.get("id")
       
      this.productApiService.GetSpecificProduct(this.pID).subscribe(
        {
          next : (res)=>{
            this.SpecProd = res.data
          },
          error : (err)=>{console.log(err)}
        })

      })
  }
  AddProduct(pId:string)
  {
this.cartApiService.AddToCart(pId).subscribe(
  {
    next :(res)=>{
      this.toastrService.success(res.message , "Success")
    },
    error : (err)=>{
      this.toastrService.error(err.message , "Error")
    }
  })

  }

}
