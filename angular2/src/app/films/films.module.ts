import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsDashboardComponent } from './films-dashboard/films-dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { FilmCardComponent } from './film-card/film-card.component';
import { MatIconModule } from '@angular/material/icon';
import { IconizePipe } from './iconize.pipe';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FilmsDashboardComponent,
    FilmCardComponent,
    IconizePipe,
    FilmDetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    RouterModule
  ],
  exports:[
    FilmsDashboardComponent
  ]
})
export class FilmsModule { }
