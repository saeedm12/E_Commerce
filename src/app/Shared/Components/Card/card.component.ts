import { CartApiService } from './../../../Core/services/Ecomm/CartApi/cart-api.service';
import { Component, inject, Input, input } from '@angular/core';
import { IProduct } from '../../Models/Interfaces/product';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-card',
  imports: [RouterLink,TranslatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required:true}) CardProduct!: IProduct
  private cartApiService = inject(CartApiService)
  private toastrService = inject(ToastrService)
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
