"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// when we need something from a module or library we import it
// here importing angular2 core so component code can access @Component decorator
var core_1 = require('@angular/core');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
// decorator function that takes a metadata object as argument
// allows us to associate metadata with component data
// metadata tells angular how to create and use this component
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Tour of heroes";
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>{{title}}</h1> <h2>{{hero.name}}</h2>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
**App Component Notes**

all angular apps have at least one root component
named this one by convention - AppComponent
hosts client user experience

component controlls view through associated template

`Component Structure`
1. 1+ import statements to reference what we need
2. @Component decorator that tells Angular what template to use and how to create component
3. component class that controls appearance and behavior of view through template
*/
//# sourceMappingURL=app.component.js.map