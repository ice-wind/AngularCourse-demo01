import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlighDirective } from './highligh.directive';



@NgModule({
  declarations: [HighlighDirective],
  imports: [
    CommonModule
  ],
  exports:[HighlighDirective]
})
export class HighlighModule { }
