import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
  RapidAPI_Key: string = 'f946fe0769msh3e2e92221ab6b62p143a49jsnce39526d53ae';
  RapidAPI_Host: string = 'unogs-unogs-v1.p.rapidapi.com';
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenizedReq = req.clone({
      setHeaders: {
        'X-RapidAPI-Key': this.RapidAPI_Key,
        'X-RapidAPI-Host':this.RapidAPI_Host
      }
    })
    return next.handle(tokenizedReq);
  }
}
