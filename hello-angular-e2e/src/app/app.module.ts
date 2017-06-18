import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { WelcomeComponent }   from './welcome.component';
//import { HeroesComponent }      from './heroes.component';
//import { HeroDetailComponent }  from './hero-detail.component';
import { WelcomeService }          from './welcome.service';
//import { HeroSearchComponent }  from './hero-search.component';

@NgModule({
  imports: [
    //declare list of all built in imported modules here..
    BrowserModule,
    FormsModule,
    HttpModule,
  //  InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    //declare list of all component here....
    AppComponent,
    WelcomeComponent,
  //  HeroDetailComponent,
 //   HeroesComponent,
 //   HeroSearchComponent
  ],
  providers: [ WelcomeService ], //declare list of services into providers...
  bootstrap: [ AppComponent ]  //bootstraping the main component which gets loaded when application starts.
})
export class AppModule { }
