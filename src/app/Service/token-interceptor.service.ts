import { Injectable ,Injector} from '@angular/core';
import { HttpEvent,HttpHandler,HttpInterceptor,HttpRequest } from '@angular/common/http';
import{Observable} from 'rxjs';
import { StoreService } from './store.service';



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService=this.injector.get(StoreService)
    let tokenizedReq=req.clone({
      setHeaders:{
        'x-access-token':`${authService.getToken()}`
      }
    })

    return next.handle(tokenizedReq);
  }
}
