import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from 'src/environments/environment';
import { ILoginRequest } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = environment.apiUrl+'accounts';
  }

  login(data:ILoginRequest):Observable<string>{
    return this.http.post<string>(`${this.url}/login`,{
      username: data.username,
      password: data.password
    });
  }

  logout():Observable<any>{
    return this.http.post(`${this.url}/logout`,null)
  }

  isAuthorized(): boolean {
    return this.getToken() != null;
   }
   

  saveToken(token:string):void{
    // localStorage["token"]=token;
    localStorage.setItem("token",token);
  }

  getToken():string|null{
    // return localStorage["token"];
    return localStorage.getItem("token");
  }

  deleteToken():void{
    localStorage.removeItem("token");
  }

}
