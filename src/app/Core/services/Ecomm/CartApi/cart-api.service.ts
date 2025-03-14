import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../Environments/Environments';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  private httpClient : HttpClient = inject(HttpClient)
  private UserHeader :any = {token : localStorage.getItem("UserToken")}
  
  constructor() { }
  AddToCart(pId : string):Observable<any>
  {
   return this.httpClient.post(`${Env.BaseUrl}/api/v1/cart` ,{productId : pId}, {headers : this.UserHeader})
  }
  UpdateProduct(pId:string,pCount : number):Observable<any>
  {
return this.httpClient.put(`${Env.BaseUrl}/api/v1/cart/${pId}` ,
   {count : pCount} , {headers : this.UserHeader})
  }
  GetCart():Observable<any>
  {
    return this.httpClient.get(`${Env.BaseUrl}/api/v1/cart`,{headers : this.UserHeader})
  }
  RemoveSpecific(pId:string):Observable<any>
  {
    return this.httpClient.delete(`${Env.BaseUrl}/api/v1/cart/${pId}`,{headers : this.UserHeader} )
  }
  ClearCart():Observable<any>
  {
    return this.httpClient.delete(`${Env.BaseUrl}/api/v1/cart`,{headers : this.UserHeader} )
  }

}
