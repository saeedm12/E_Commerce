import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../Environments/Environments';



@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor() { }
  private httpClient : HttpClient = inject(HttpClient)
  GetProducts():Observable<any>
  {
return this.httpClient.get(`${Env.BaseUrl}/api/v1/products`)
  }
 GetSpecificProduct(pId:string | null):Observable<any>
 {
  return this.httpClient.get(`${Env.BaseUrl}/api/v1/products/${pId}`)
 }


}
