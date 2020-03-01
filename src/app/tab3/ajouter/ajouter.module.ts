import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {environment} from '.././../../environments/environment';
import { IonicModule } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import { AjouterPageRoutingModule } from './ajouter-routing.module';
import { AgmCoreModule } from "@agm/core";
import { AjouterPage } from './ajouter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterPageRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsAPIKey
    }),
    
  ],
  declarations: [AjouterPage]
})
export class AjouterPageModule {}
