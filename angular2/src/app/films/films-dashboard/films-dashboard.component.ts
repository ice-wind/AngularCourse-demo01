import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { Increment } from 'src/app/+state/counter/counter.action';
import { MockService } from 'src/app/mock.service';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-films-dashboard',
  templateUrl: './films-dashboard.component.html',
  styleUrls: ['./films-dashboard.component.css']
})
export class FilmsDashboardComponent implements OnInit {
  films!:Array<any>;
  mockData1:any;
  mockData2:any;

  constructor(
    private filmService:FilmService,
    private mockService:MockService,
    private router:Router,
    private store:Store<any>
    ) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(res=>{
      this.films = res;
    });

    // this.mockService.mock1().subscribe(res=>{
    //   this.mockData1 = res;
    // });

    // this.mockService.mock2().subscribe(res=>{
    //   this.mockData2 = res;
    // });

    // let combined$ = combineLatest([this.mockService.mock1(),this.mockService.mock2()]);
    // combined$.subscribe(res=>{
    //   console.log(res);      
    // });
  }
  goToDetail(){
    this.router.navigate(['/film-detail'])
  }

  increment(){
    this.store.dispatch(Increment())
  }
}
