"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
// bootstrapping is platform-specific
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.appRouterProviders
]);
/*

**main notes**

1. import two things needed to launch app
  - angular browser bootstrap function
  - application root component
2. Call boostrap with AppComponent

Component Router is a service. Need to import appRouterProviders that contain configured router

*/
//# sourceMappingURL=main.js.map