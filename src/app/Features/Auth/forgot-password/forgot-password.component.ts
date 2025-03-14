import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthApiService } from '../../../Core/services/Auth/auth-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {



    private authApiService = inject(AuthApiService);
      ErrorMessage:string=""
      IsLoading:boolean=false;
      SuccessMsg:string = ""
      Hidden : boolean = false;


      ForgotPassForm:FormGroup=new FormGroup(
      {
       email : new FormControl(null,[Validators.required,Validators.email])
      })
      ForgotSubmit()
      {
        this.IsLoading=true;
        this.authApiService.ForgotPassword(this.ForgotPassForm.value).subscribe(
          {
            next : (res)=>{
              if(res.statusMsg=="success")
              {
              this.SuccessMsg=res.message

              }
              this.IsLoading=false
              this.Hidden=true;

            },
            error:(err)=>{
              if(err.error.statusMsg=="fail")
              {
                this.ErrorMessage=err.error.message
              }
              this.IsLoading=false
            }
          })
      }
}
