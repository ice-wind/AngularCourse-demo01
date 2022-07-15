import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPassword]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting:PasswordDirective,
      multi:true
    }
  ]
})
export class PasswordDirective {

  constructor() { }

  validate(control:FormControl){
    let value = control.value;
    debugger
    if(value?.length<5){
      return{
        passwordError:true
      }      
    }else{return null}
  }

}
