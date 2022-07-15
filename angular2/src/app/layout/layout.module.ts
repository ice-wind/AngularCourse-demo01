import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutWithSidebarComponent } from './layout-with-sidebar/layout-with-sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoginModule } from '../login/login.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutWithSidebarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    LoginModule,
    RouterModule
  ],
  exports:[
    LayoutWithSidebarComponent
  ]
})
export class LayoutModule { }
