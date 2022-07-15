import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Authenticate } from 'src/app/shared/Interface/authenticate.interface';
import { AuthUser } from 'src/app/shared/Interface/authUser.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
loginForm:Authenticate={
  username:"",
  password:""
}

responseObj!:AuthUser;

constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }

  async login(f:NgForm){
    console.log(f);
    if(f.valid){
      await this.CallApi(f.value);      
      return;
    }

  }
  private async CallApi(payload: Authenticate):Promise<void> {
    try{
       await lastValueFrom(this.authService.login(payload));      
    }catch (error){
      console.log(error);            
    }
  }
}
