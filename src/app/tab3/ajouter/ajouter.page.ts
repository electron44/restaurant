import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import  { Plugins } from "@capacitor/core";
import { HttpClient } from "@angular/common/http";
import { UtilsService } from 'src/app/services/utils.service';
import { map } from "rxjs/operators";
import  {environment} from '../../../environments/environment';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {
  lat : number;
  long :number;
  adress : string;
  restaurant : Restaurant;

  constructor(private service : RestaurantService,
    private http: HttpClient,
    private toast :ToastController,private router :Router,
    private utils : UtilsService) {
    this.restaurant= new Restaurant() ;
  }

  ngOnInit() {
    this.getCurrentLocation();
  }

  async getCurrentPositionLa() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
  }
  ajouterRestaurant(){
    console.log(this.restaurant)   ;
    this.service.postRestaurant(this.restaurant).subscribe
    (
      restaurant=> {
        this.utils.presentToast('restaurant ajouté avec succes','danger') ;
        this.router.navigateByUrl("/tabs/tab3") ;

      }
      ,
      error =>{
        this.utils.presentToast("Erreur ","red") ;
      }

    )
  }

  getCurrentLocation() {
    Geolocation.getCurrentPosition().then(result => {
      this.lat = result.coords.latitude;
      this.long = result.coords.longitude;
      this.restaurant.longitude =this.long;
      this.restaurant.latitude = this.lat;
      console.log(this.long)
      // calling getAddress function to decode the address

      this.getAddress(this.lat , this.long).subscribe(decodedAddress => {
        this.adress = decodedAddress 
      });
    });
  }

  // This function makes an http call to google api to decode the cordinates

  private getAddress(lat: number, lan: number) {
    return this.http
      .get<any>(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lan}&key=${
          environment.googleMapsAPIKey
        }`
      )
      .pipe(
        map(geoData => {
          if (!geoData || !geoData.results || geoData.results === 0) {
            return null;
          }
          console.log(geoData.results);
          return geoData.results[0];
        })
      );
  }


  onMarkerClick() {
    this.utils.presentToast(this.adress,"success");
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: this.adress,

      position: "bottom",
      buttons: [
        {
          icon: "close-circle",
          role: "cancel"
        }
      ]
    });
    toast.present();
  }
}


  
