import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:3000/register";
  private _loginUrl = "http://localhost:3000/login";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  
 
 loggedin(){
   return !!localStorage.getItem('token')
 }

  

 logoutUser(){
   localStorage.removeItem('token')
   this._router.navigate(['/'])
 }

}