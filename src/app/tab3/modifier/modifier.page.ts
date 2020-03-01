import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { UtilsService } from 'src/app/services/utils.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {

  restaurantId : number;
  restaurant :Restaurant ;
  formGroup :FormGroup ;
  nomRestaurantControl : FormControl ;
  longControl : FormControl ;
  latControl : FormControl ;
  constructor(
    private route : ActivatedRoute,
    private service :RestaurantService ,
  private formBuilder : FormBuilder,
  private utils : UtilsService,
  private nav :NavController 

  ) {
   
    this.restaurantId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getRestaurant(this.restaurantId).subscribe (restaurant =>
      {this.restaurant =restaurant 
        this.createForm() ;
      }) ;
      
  }

  

  ngOnInit() {
  }
  createForm(){
    this.nomRestaurantControl = new FormControl(this.restaurant.nomRestaurant,[Validators.required,Validators.minLength(3)])
    this.longControl = new FormControl(this.restaurant.longitude,[Validators.required,Validators.minLength(3)])
    this.latControl = new FormControl(this.restaurant.latitude,[Validators.required,Validators.minLength(3)])
    this.formGroup =this.formBuilder.group(({
      nomRestaurant : this.nomRestaurantControl ,
      long : this.longControl ,
      lat : this.latControl ,
    }))
  }
  modifierRestaurant(){
    let restaurant = new Restaurant() ;
    restaurant.id = this.restaurantId ;
    restaurant.nomRestaurant = this.formGroup.get('nomRestaurant').value ;
    restaurant.longitude = this.formGroup.get('long').value ;
    restaurant.latitude = this.formGroup.get('lat').value ;
    console.log(this.formGroup.value) ;
    this.service.updateRestaurant(restaurant).subscribe(
      restaurant =>{
        this.utils.presentToast("restaurant modifié avec succes","success") ;
        this.nav.back() ;
          console.log(restaurant) ;
      },
      error =>{
        this.utils.presentToast("ERREUR lors de la modification","danger") ;
        console.log("La modification a échoué") ;
      } 
    )

  }

}
