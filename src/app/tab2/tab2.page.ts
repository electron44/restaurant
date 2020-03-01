import { Component } from '@angular/core';
import { Plat } from '../models/plat';
import { PlatsService } from '../services/plats.service';
import { Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  plats: Plat[];
  constructor(private route : Router , private api :PlatsService,private utils : UtilsService) {
    this.getPlats();
  }
getPlats():void{
  this.api.getPlats().subscribe(Response=>{
    this.plats = Response;
  })
}

modifierPlat(id:any):void{
  this.route.navigate(['tabs/tab2/modifier',id]);
}

delete(plat:Plat):void{
  this.api.deletePlat(plat.id).subscribe(Response=>{
    this.getPlats();
    this.utils.presentToast("Suppression effectué","default");
  });
}
}
