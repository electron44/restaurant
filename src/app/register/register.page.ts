import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { UtilsService } from '../services/utils.service';
import { Utilisateur } from '../models/utilisateur';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm : FormGroup;

  constructor(private router: Router, private  formBuilder: FormBuilder
    ,private service : AuthServiceService,private utils: UtilsService
    ) { }

  ngOnInit() {
    this.registerForm =  this.formBuilder.group({
      'username' :[null,[Validators.required,Validators.minLength(5)]],
      'email' : [null,[Validators.required,Validators.email]],
      'password' : [null,[Validators.required]]
    })
  }
  
  register(userInfo :Utilisateur){
    this.service.register(userInfo).subscribe(data=>{
      this.utils.presentToast('Inscription réussie','success');
      this.router.navigateByUrl('login');
    },error=>{
      switch(error.error.message[0].messages[0].id){
        case "Auth.form.error.username.taken":
              this.utils.presentToast('username déja utilisé',"danger");
              break;
        case "Auth.form.error.email.taken":
              this.utils.presentToast('Email déja utilisé',"danger");
              break;
        default :
              this.utils.presentToast("Une erreur est survenu !","danger");
      }
    })
  }

}
