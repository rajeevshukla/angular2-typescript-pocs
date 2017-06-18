import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent }   from './welcome.component';
//import { HeroesComponent }      from './heroes.component';
//import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'welcome',  component: WelcomeComponent },
 // { path: 'detail/:id', component: HeroDetailComponent },
 // { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
