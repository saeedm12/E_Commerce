import { TranslationService } from './../../../Core/services/Translation/translation.service';
import { AuthApiService } from './../../../Core/services/Auth/auth-api.service';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
private authApiService = inject(AuthApiService)
private router=inject(Router)
private myTranslationService = inject(TranslationService)
IsLogin : boolean=false;
Logout()
{

  localStorage.removeItem("UserToken")
  this.router.navigate(["/login"])
  this.authApiService.UserToken.next(null)
}
ngOnInit()
{
this.authApiService.UserToken.subscribe(()=>
  {
    if(this.authApiService.UserToken.getValue()==null)
    {
      this.IsLogin=false;
    }
    else 
    {
      this.IsLogin=true;

    }
  })
}


changeLang(lang: string) {
  this.myTranslationService.changeLang(lang);
}

}
