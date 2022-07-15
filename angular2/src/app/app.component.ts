import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular2';

  constructor(private authService:AuthService){

  }
  async ngOnInit() {
    const token = localStorage.getItem('token');
    if(!!token){
      await lastValueFrom(this.authService.resolve(token));
    }
  }
}
