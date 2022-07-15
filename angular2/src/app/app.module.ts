import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { LayoutModule } from './layout/layout.module';
import { ViewsModule } from './views/views.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FilmsModule } from './films/films.module';
import { HighlighModule } from './highligh/highligh.module';
import { TemplateDrivenSignupModule } from './template-driven-signup/template-driven-signup.module';
import { ReactiveSignupModule } from './reactive-signup/reactive-signup.module';
import { FruitsModule } from './fruits/fruits.module';
import { AuthInterceptor } from './services/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { counterreducer } from './+state/counter/counter.reducer';

export const rootReducer = {
  counter:counterreducer
}

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    ViewsModule,
    FilmsModule,
    HttpClientModule,
    HighlighModule,
    TemplateDrivenSignupModule,
    ReactiveSignupModule,
    FruitsModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
