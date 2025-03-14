import { OrdersService } from './../../../Core/services/Ecomm/AllOrders/orders.service';
import { CartApiService } from './../../../Core/services/Ecomm/CartApi/cart-api.service';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, Form, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {
  private cartApiService : CartApiService = inject(CartApiService)
  private activatedRoute = inject (ActivatedRoute)
  private ordersService = inject(OrdersService)
  IsLoading:boolean = false
  CartId:string=""

  AddressForm : FormGroup = new FormGroup(
    {
      details : new FormControl(null),
      phone : new FormControl(null,[Validators.required,Validators.pattern(/^(01)[0125][0-9]{8}$/)]),
      city : new FormControl()

    })
    Checkout()
    {
      this.IsLoading=true;
      this.activatedRoute.paramMap.subscribe(  (p)=>{

    this.CartId=p.get("CartId")!
    this.ordersService.Checkout(this.CartId , this.AddressForm.value).subscribe(
      {
        next : (res)=>{window.location.href=res.session.url},
        error : (err)=>{console.log(err)}
      })


      } )
    }
}
