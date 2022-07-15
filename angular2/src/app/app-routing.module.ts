import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailComponent } from './films/film-detail/film-detail.component';
import { FilmsDashboardComponent } from './films/films-dashboard/films-dashboard.component';
import { FruitFormComponent } from './fruits/fruit-form/fruit-form.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { AuthGuard } from './services/auth.guard';
import { LayoutViewComponent } from './views/layout-view/layout-view.component';

const routes: Routes = [
  {
    path:"login", component:LoginFormComponent,
    children:
      [{
        path:"",
        component:LoginFormComponent
      }]
  },
  {
    path:"films", 
    component:LayoutViewComponent,
    canActivate:[AuthGuard],
    children:
      [{
        path:"",
        component:FilmsDashboardComponent
      },
      {
        path:"detail/:filmId",
        component:FilmDetailComponent
      }]
  },
  {
    path:"fruits", 
    component:LayoutViewComponent,    
    children:
      [{
        path:"",
        component:FruitFormComponent
      }]
  },
  {
    path:"film-detail", 
    component:LayoutViewComponent,
    children:
      [{
        path:"",
        component:FilmDetailComponent
      }]
  },
  {
    path:'articles',
    component:LayoutViewComponent,
    children:[
      {
        path:"",
        loadChildren:()=>
        import('./articles/articles.module').then
        (module=>module.ArticlesModule)
      },
      {
        path:"",
        pathMatch:"full",
        redirectTo:"/login"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
