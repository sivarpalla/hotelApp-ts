import { HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request Interceptor', req);
  const modifiedRequest = req.clone({
    params: req.params.set('tokenParam', '123456g'),
    headers: req.headers.set('token', '123456f')
  });
  return next(modifiedRequest);
};
