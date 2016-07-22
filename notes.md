# package.json scripts

  - `npm start` &ndash; runs the compiler and a server at the same time, both in "watch mode"

  - `npm run tsc` &ndash; runs the TypeScript compiler once

  - `npm run tsc:w` &ndash; runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and recompiling when it sees them

  - `npm run lite` &ndash; runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server with excellent support for Angular apps that use routing

  - `npm run typings` &ndash; runs the [typings tool](https://angular.io/docs/ts/latest/guide/typescript-configuration.html#!#typings) separately

  - `npm run postinstall` &ndash; called by npm automatically after it successfully completes package installation. This script installs the [TypeScript definition files](https://angular.io/docs/ts/latest/guide/typescript-configuration.html#!#typings) defined in typings.json

# Angular apps

*Angular apps are modular* &mdash; many files each dedicated to a purpose

*Angular is modular* &mdash; collection of library modules each made of up several related features used to build an application

multi-line strings need backticks instead of quotes

# Router Outlet

tell router where to display component by adding <router-outlet> marker tags to bottom of template

RouterOutlet is in ROUTER_DIRECTIVES. Router displays each component immediately below <router-outlet> as app is navigated through
