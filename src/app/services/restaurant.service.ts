import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant';
import { URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http : HttpClient ) { }
  getRestaurant(id:number): Observable<Restaurant>{
    return this.http.get<Restaurant>(URL+"/restos/"+id).pipe() ;

  }
  getRestaurants(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(URL+"/restos").pipe() ;

  }
  deleteRestaurant(id:number) : Observable<Restaurant>{
    return this.http.delete<Restaurant>(URL+"/restos/"+id).pipe() ;
  }
  postRestaurant(restaurant:Restaurant): Observable<Restaurant>
  {
    return this.http.post<Restaurant>(URL+"/restos/",restaurant).pipe() ;
  }
  updateRestaurant(restaurant:Restaurant)
  {
    return this.http.put<Restaurant>(URL+"/restos/"+restaurant.id,restaurant).pipe() ;
  }
}
