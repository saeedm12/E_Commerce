import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  let UserHeader :any = {token : localStorage.getItem("UserToken")}

 req = req.clone(
  {
setHeaders:UserHeader
  }
)
  return next(req);
};
