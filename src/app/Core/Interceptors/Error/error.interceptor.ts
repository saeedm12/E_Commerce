import { ToastrService } from 'ngx-toastr';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  let toastrService : ToastrService = inject(ToastrService)

  return next(req).pipe
  (
   catchError((err)=>{toastrService.error(err.error.message ,"Error")
    return throwError(()=>err);
   })
  );
};
