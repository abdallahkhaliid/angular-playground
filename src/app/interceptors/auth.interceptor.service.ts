import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('firebaseio.com')) {
      return next.handle(req);
    }

    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer your-real-token'),
    });
    return next.handle(modifiedReq);
  }
}
