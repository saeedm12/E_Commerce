import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PlatformService } from '../../services/Platform/platform.service';


export const authGuard: CanActivateFn = (route, state) => 
{

let router=inject(Router);
let Platform = inject(PlatformService)
 if(Platform.CheckPlatform())
 {
    if(localStorage.getItem("UserToken")!=null)
        {
        return true;
        }
     
 }
 router.navigate(["/login"])
 return false;
};
