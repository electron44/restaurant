import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.service.redirectUrl = state.url;
    return this.checkConnexion();
  } 

  constructor(private router : Router,private service: AuthServiceService){}

  checkConnexion():boolean {
    if(window.localStorage.getItem("token")){
      return true;
    }else{
      this.router.navigate(['login']);
    }
  }
  
}
