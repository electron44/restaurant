import { Component } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { UtilsService } from '../services/utils.service';
import { Router } from '@angular/router';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

restaurants: Restaurant[];
constructor(private route : Router , private api :RestaurantService,private utils : UtilsService) {
  this.getRestaurant();
}
getRestaurant():void{
this.api.getRestaurants().subscribe(Response=>{
  this.restaurants = Response;
})
}

modifierRestaurant(id:any):void{
this.route.navigate(['tabs/tab3/modifier',id]);
}

delete(restaurant: Restaurant):void{
this.api.deleteRestaurant(restaurant.id).subscribe(Response=>{
  this.getRestaurant();
  this.utils.presentToast("Suppression effectué","default");
});
}
}
