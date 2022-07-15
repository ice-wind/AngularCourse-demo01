import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { UserService } from 'src/app/user.service';
import { User } from './Interface/user.interface';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class SignupFormComponent implements OnInit {
@ViewChild('f')f!:NgForm;
countArray=[1];
user:User={
  name:"",
  account:{
    email:"",
    confirm:""
  },
  password:""
}
  IsSubmitted: boolean = false;

  constructor(private userService:UserService,
    private changeDetectorRef:ChangeDetectorRef) {

   }

  async ngOnInit(): Promise<void> {

    const tempUser = await lastValueFrom(this.userService.getUserById(2));
    console.log('tempUser',tempUser);

    this.userService.getUserById(2).subscribe(myUser=>{
      console.log(myUser);
      
      this.user = myUser;
      this.changeDetectorRef.detectChanges();
    })
  }

  ngAfterViewInit(){
    
  }

  ngDoCheck(){
    
  }
  

  validateWords($event:string){
    console.log($event);
    console.log("form",this.f);
    
    if(!!$event && $event.includes('test')){
      const nameCtrl = this.f.controls.name;
      console.log(nameCtrl);
      nameCtrl.setErrors({blackListed:true})
    }
  }

  async onSubmit(f:NgForm){
    console.log(f);    
    if(f.valid){
      this.IsSubmitted = true
      await this.save(this.user);
      this.f.resetForm();
    }    
  }
  
  private async save(payloda:User){
    try {
      
      this.userService.saveUserById(this.user).subscribe(res=>{
        console.log('save res:',res);        
        return
      });    
      
    }catch(err){
      console.log(err);
      alert("cele zle")
    }
  }
  
  
}
