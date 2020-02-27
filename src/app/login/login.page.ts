import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm : FormGroup;

  constructor(private service : AuthServiceService,
    private  formBuilder: FormBuilder,
    private router : Router,
    private utils :UtilsService
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        'identifier' :[null, [Validators.required,Validators.email]],
        'password' :[null,[Validators.required]]
    });
  }

  login(userInfo :any){
    console.log(this.service.redirectUrl);
    this.service.login(userInfo).subscribe(data=>{
      console.log(userInfo)
      this.service.isAuth = true;
      window.localStorage.setItem('token',data.jwt);
      this.router.navigateByUrl(this.service.redirectUrl);
    },error=>{
      this.utils.presentToast("Nom d'utilisateur incorrect", "danger");
    })
  }

}
