import { Component } from '@angular/core';
import { Plat } from '../models/plat';
import { PlatsService } from '../services/plats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  plats: Plat[];
  constructor(private route : Router , private api :PlatsService) {
    this.getPlats();
  }
getPlats():void{
  this.api.getPlats().subscribe(Response=>{
    this.plats = Response;
  })
}

modifierPlat(id:any):void{
  this.route.navigate(['atbs/tab2/modifier',id]);
}

delete(plat:Plat):void{
  this.api.deletePlat(plat.id).subscribe(Response=>{
    this.getPlats();
  });
}
}
