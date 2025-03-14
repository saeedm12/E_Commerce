import { AuthApiService } from './../../../Core/services/Auth/auth-api.service';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private authApiService = inject(AuthApiService);
  private router = inject(Router)
  ErrorMessage:string=""
  IsLoading:boolean=false;

  RegisterForm:FormGroup=new FormGroup(
    {
      name : new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
      email : new FormControl(null,[Validators.required,Validators.email]),
      password : new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-zA-Z0-9]{6,20}$/)]),
      rePassword : new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-zA-Z0-9]{6,20}$/)]),
      phone : new FormControl(null,[Validators.required,Validators.pattern(/^(01)[0125][0-9]{8}$/)])
    },
    this.ConfirmPassword
  )
  ConfirmPassword(g:AbstractControl)
  {
    if(g.get("password")?.value===g.get("rePassword")?.value)
    {
     return null
    }
    else
    {
      return {"mismatched":true}
    }
  }
  RegisterSubmit()
  {
    if(this.RegisterForm.valid)
    {
      this.IsLoading=true
     this.authApiService.SendRegisterApi(this.RegisterForm.value).subscribe(
      {
        
        next:(res)=>{console.log(res);
          this.IsLoading=false
          this.router.navigate(["/login"])
          
        },
        error:(err)=>{
          this.ErrorMessage=err.error.message
          this.IsLoading=false
        }
      }
    )
    }
  }
  

}
