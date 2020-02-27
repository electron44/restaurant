import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import {Utilisateur} from '../models/utilisateur';
import {URL} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient : HttpClient) { }


  redirectUrl : string;
  isAuth :boolean = false;
  
  login(user: Utilisateur) :Observable<any>{
    return this.httpClient.post(URL+'/auth/local',user).pipe();
  }

  register(user :Utilisateur){
    return this.httpClient.post(URL+'/auth/local/register',user).pipe();
  }

}
