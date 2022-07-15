import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input() filmName!:string;
  constructor() { }

  ngOnInit(): void {
    console.log("OnInit");
    
  }
  ngOnChanges(simplechanges:SimpleChanges){
    console.log(this.filmName);    
    console.log(simplechanges);
    
  }
}
