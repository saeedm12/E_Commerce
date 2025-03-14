import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../Environments/Environments';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {

  constructor() { }
  private httpClient:HttpClient = inject(HttpClient)
  GetCat():Observable<any>
  {
    return this.httpClient.get(`${Env.BaseUrl}/api/v1/categories`)
  }
}
