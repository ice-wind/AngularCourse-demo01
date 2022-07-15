import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitFormComponent } from './fruit-form/fruit-form.component';
import {  ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    FruitFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  exports:[
    FruitFormComponent
  ]
})
export class FruitsModule { }
