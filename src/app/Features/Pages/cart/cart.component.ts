import { ToastrService } from 'ngx-toastr';
import { ICartProducts } from '../../../Shared/Models/Interfaces/cart-products';
import { IProduct } from '../../../Shared/Models/Interfaces/product';
import { CartApiService } from './../../../Core/services/Ecomm/CartApi/cart-api.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  private cartApiService : CartApiService = inject(CartApiService)
  private toastrService : ToastrService = inject(ToastrService)
  CartProduct : ICartProducts[] = []
  TotalPrice : number = 0;
  CartId : string = ``
   
ngOnInit(): void {
  
  this.GetCart()
}
GetCart()
{
  this.cartApiService.GetCart().subscribe(
    {
     next : (res)=>{
      this.CartProduct = res.data.products
      this.TotalPrice = res.data.totalCartPrice;
      this.CartId = res.cartId
     }, 
     error : (err)=>{console.log(err)}
    }
  )
}
RemoveProduct(pId:string)
{
  this.cartApiService.RemoveSpecific(pId).subscribe(
    {
      next : (res)=>
        {
          if(res.status=="success")
          {
            this.toastrService.success("Item Deleted Successfully" , "Success")
            this.GetCart()
          }
        },
      error : (err)=>{
        if(err.statusText == "Bad Request")
        {
          this.toastrService.error("Item couldn't be deleted" , "Bad Request")
        }
      }
    })
}
ChangeCount(pID:string,pCount:number)
{
  if(pCount<=0)
  {
    this.RemoveProduct(pID)
  }
this.cartApiService.UpdateProduct(pID , pCount).subscribe(
  {
    
    next:(res)=>{

      this.toastrService.success("Item updated successfully" , "Item Updated")
      this.GetCart()
    },
    error:(err)=>{console.log(err)

    }
  }
)
}
ClearCart()
{
  this.cartApiService.ClearCart().subscribe(
    {
      next:(res)=>{
        this.toastrService.success("Cart Deleted Successfully" , "Success")
        this.GetCart();
      },
      error:(err)=>{console.log(err)}
    })
}
}

