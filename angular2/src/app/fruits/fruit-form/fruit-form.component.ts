import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-fruit-form',
  templateUrl: './fruit-form.component.html',
  styleUrls: ['./fruit-form.component.css']
})
export class FruitFormComponent implements OnInit {

  myControl = new FormControl('');
   options = [{id:1,name:"apple"},{id:2,name:"banana"}];
  //options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<Array<{id:number,name:string}>>;

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): Array<{id:number,name:string}> {
    console.log(value)
    const filterValue = value?.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  getTitle(itemId: number) {
    if(this.options && this.options.length > 0) {
      const x = this.options as any

      return x.find((item: any) => item.id === itemId)?.name;
    }
  }

}
