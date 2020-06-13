import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authservice:AuthService,
    private _router:Router){}
  canActivate(): boolean {
    if(this._authservice.loggedin()){
      return true
    }else{
      this._router.navigate(['/login'])
      return false
    }
  
  }
  
}
