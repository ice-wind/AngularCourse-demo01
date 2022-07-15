import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  filmId!:number;
  film:any

  constructor(
    private activatedRow:ActivatedRoute,
    private filmService:FilmService
    ) {
    this.activatedRow.params.subscribe(res=>{
      console.log(res);
      const {filmId} = res
      this.filmId = filmId;
    })
   }

  ngOnInit(): void {
    this.filmService.getFilmById(this.filmId).subscribe(res=>{
      console.log(res);
      this.film = res;
    });
  }

}
