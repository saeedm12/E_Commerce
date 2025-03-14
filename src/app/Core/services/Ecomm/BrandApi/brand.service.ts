import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../Environments/Environments';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private httpclient : HttpClient = inject(HttpClient)
  constructor() { }
  GetBrands():Observable<any>
  {
    return this.httpclient.get(`${Env.BaseUrl}/api/v1/brands`)
  }
}
