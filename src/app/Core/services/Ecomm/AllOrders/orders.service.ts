import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../Environments/Environments';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private httpClient : HttpClient = inject(HttpClient)
  private UserHeader :any = {token : localStorage.getItem("UserToken")}

  constructor() { }

  Checkout(CartId : string , AddressFormValue : object):Observable<any>
  {
return this.httpClient.post(`${Env.BaseUrl}/api/v1/orders/checkout-session/67b210df429eb834606c7a30?url=${Env.SiteUrl}`
  , {shippingAddress : AddressFormValue ,} , {headers : this.UserHeader}
)
  }
}
