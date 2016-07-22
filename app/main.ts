import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

// bootstrapping is platform-specific
bootstrap(AppComponent, [
  appRouterProviders
]);

/*

**main notes**

1. import two things needed to launch app
  - angular browser bootstrap function
  - application root component
2. Call boostrap with AppComponent

Component Router is a service. Need to import appRouterProviders that contain configured router

*/
