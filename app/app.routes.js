"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var routes = [
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
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