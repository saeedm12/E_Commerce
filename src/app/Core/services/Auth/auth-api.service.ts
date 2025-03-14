import { PlatformService } from './../Platform/platform.service';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Env } from '../../Environments/Environments';




@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private httpClient = inject(HttpClient);
  private platformService= inject(PlatformService)
  UserToken : BehaviorSubject<any>=new BehaviorSubject(null);
  constructor() 
  {
    if(this.platformService.CheckPlatform())
    {
      if(localStorage.getItem("UserToken"))
      {
        this.SaveData()
      }
    
    }
  }
  SendRegisterApi(data:object):Observable<any>
  {
    return this.httpClient.post(`${Env.BaseUrl}/api/v1/auth/signup`,data);
  }
    LoginApi(data:object):Observable<any>
    {
    return this.httpClient.post(`${Env.BaseUrl}/api/v1/auth/signin`,data)
    }

    SaveData()
    {
    this.UserToken.next(jwtDecode(JSON.stringify(localStorage.getItem("UserToken"))));
    }
    ForgotPassword(ForgotData:object):Observable<any>
    {
     return this.httpClient.post(`${Env.BaseUrl}/api/v1/auth/forgotPasswords`,ForgotData)
    }
}
