import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { CustomAsyncValidator } from './custom-async-validator';
import { Customvalidator } from './custom-validator';

@Component({
  selector: 'app-reactive-signup-form',
  templateUrl: './reactive-signup-form.component.html',
  styleUrls: ['./reactive-signup-form.component.css']
})
export class ReactiveSignupFormComponent implements OnInit {
  submited:boolean=false;
  user!:FormGroup;

  get name(){
      return this.user.get('name') as FormControl;
  }
  get account(){
    return this.user.get('account') as FormGroup;
  }

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.user = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(2)]),
      account:new FormGroup({
        email:new FormControl('',[Validators.required,Customvalidator.unique],[CustomAsyncValidator.unique(this.userService)]),
        confirm:new FormControl('',[Validators.required])
      })
    });
  }
  onSubmit(){
    if(this.user.invalid){
      alert("nevalidny formular");
    }else{
      console.log(this.user.value);
      this.submited=true;
    }    
    
  }
}
