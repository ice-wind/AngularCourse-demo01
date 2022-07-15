import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
 
    constructor(){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const tmptoken =  localStorage.getItem('token');

        if(!!tmptoken){
            const reqWithToken = req.clone({
                headers: req.headers.set("Authorization","Bearer "+tmptoken)
            })

            return next.handle(reqWithToken);
        }
        return next.handle(req);
    }

}