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
var hero_detail_component_1 = require('./hero-detail.component');
// import hero service
var hero_service_1 = require('./hero.service');
// decorator function that takes a metadata object as argument
// allows us to associate metadata with component data
// metadata tells angular how to create and use this component
var HeroesComponent = (function () {
    // 1. Add constructor that defines a private property
    // 2. add components providers metadata
    //constructor itself does nothing
    // angular now knows to supply instance of heroservice when creates new appcomponent
    function HeroesComponent(heroService) {
        this.heroService = heroService;
        this.title = "Tour of heroes";
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "],
            template: "\n    <h1>{{title}}</h1>\n\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let hero of heroes\"\n        (click)=\"onSelect(hero)\"\n        [class.selected]=\"hero === selectedHero\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n\n    <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n  ",
            directives: [hero_detail_component_1.HeroDetailComponent]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
/*

**App Component Notes**

all angular apps have at least one root component
named this one by convention - HeroesComponent
hosts client user experience

component controlls view through associated template

`Component Structure`
1. 1+ import statements to reference what we need
2. @Component decorator that tells Angular what template to use and how to create component
3. component class that controls appearance and behavior of view through template

(*) prefix to ngFor is critical - indicates that the li element and its children are a master template

quoted text means "take each hero in the heroes array, store it in the local hero variable, and make it available to the corresponding template instance"

let keyword is what identifies hero as template input veriable, can now reference that var within template to access props

*click event* - parenthesis identify li click event as target. hero var passed in is same one we previously defined for ngFor

[] syntax for *property binding* - binding that allows data flows one way from data source to a property of the class

Angular insists that we declare a *target* property to be an *input* property. If we don't, Angular rejects the binding and throws an error.

to coordinate app and hero-detail-component we have to bind the selectedHero proerty of HeroesComponent to HeroDetailComponent elements hero proerty through [hero]="selectedHero" <-- [] for property binding
*/
//# sourceMappingURL=heroes.component.js.map