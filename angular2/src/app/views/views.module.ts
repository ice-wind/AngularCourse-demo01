import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutViewComponent } from './layout-view/layout-view.component';
import { BlankViewComponent } from './blank-view/blank-view.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    LayoutViewComponent,
    BlankViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule
  ]
})
export class ViewsModule { }
