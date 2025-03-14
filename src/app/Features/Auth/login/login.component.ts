import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthApiService } from '../../../Core/services/Auth/auth-api.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    private authApiService = inject(AuthApiService);
    private router = inject(Router)
    ErrorMessage:string=""
    IsLoading:boolean=false;

  LoginForm:FormGroup=new FormGroup(
    {
     email : new FormControl(null,[Validators.required,Validators.email]),
     password : new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-zA-Z0-9]{6,20}$/)])
    })
    LoginSubmit()
    {
      this.IsLoading=true;
    this.authApiService.LoginApi(this.LoginForm.value).subscribe(
      {

        next:(res)=>{
          if(res.message=="success")
          {
            //Set Token
            localStorage.setItem("UserToken", res.token)
            //Save Token
            this.authApiService.SaveData();
            //Navigate Home
            this.router.navigate(["/home"])
          }
          this.IsLoading=false
        },
        error:(err)=>{console.log(err)
          this.ErrorMessage=err.error.message
          this.IsLoading=false
        }
      })
    }

}
