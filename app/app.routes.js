"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var dashboard_component_1 = require('./dashboard.component');
var routes = [
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
/*

*routes* tell the router which views to display when auser clicks a link or pastes a URL into the browser address bar

RouterConfig is an array of route definitions

route defintiions have two parts
  1. path: router matches this routes path to the url in browser bar (/heroes)
  2. component: component router should create when navigating to this route (HeroesComponent)

*/
//# sourceMappingURL=app.routes.js.map