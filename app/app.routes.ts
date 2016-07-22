import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

const routes: RouterConfig = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];

/*

*routes* tell the router which views to display when auser clicks a link or pastes a URL into the browser address bar

RouterConfig is an array of route definitions

route defintiions have two parts
  1. path: router matches this routes path to the url in browser bar (/heroes)
  2. component: component router should create when navigating to this route (HeroesComponent)

*/
