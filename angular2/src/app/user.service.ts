import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './template-driven-signup/signup-form/Interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {

   }

   getUserById(id:number):Observable<any>{
    return this.httpClient.get(`https://5ed74760152c310016d84d62.mockapi.io/api/users/${id}`);
   }

   saveUserById(user:User):Observable<{status:boolean}>{
    return this.httpClient.post<{status:boolean}>(`https://5ed74760152c310016d84d62.mockapi.io/api/users/`,user);
   }

   checkDuplicity(payload:User):Observable<{valid:boolean}>{
    return this.httpClient.post<{valid:boolean}>(`https://5ed74760152c310016d84d62.mockapi.io/api/validation/`,payload);
   }
   

}
