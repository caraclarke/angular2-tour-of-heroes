// when we need something from a module or library we import it
// here importing angular2 core so component code can access @Component decorator
import {Component, OnInit} from '@angular/core';
// hero property is an Input
import { Hero } from './hero';
import {HeroDetailComponent} from './hero-detail.component';
// import hero service
import { HeroService } from './hero.service';

// decorator function that takes a metadata object as argument
// allows us to associate metadata with component data
// metadata tells angular how to create and use this component
@Component({
  selector: 'my-heroes',
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  template: `
    <h1>{{title}}</h1>

    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        (click)="onSelect(hero)"
        [class.selected]="hero === selectedHero">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>

    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  directives: [HeroDetailComponent],
  providers: [HeroService]
})

// export HeroesComponent so we can import it elsewhere in application
export class HeroesComponent implements OnInit {

  ngOnInit() {
    this.getHeroes();
  }

  title = "Tour of heroes";
  heroes: Hero[];
  selectedHero: Hero;

  // 1. Add constructor that defines a private property
  // 2. add components providers metadata
  //constructor itself does nothing
  // angular now knows to supply instance of heroservice when creates new appcomponent
  constructor(private heroService: HeroService) { }

  getHeroes() {
    this.heroService.getHeroes().then(
      heroes => this.heroes = heroes
    );
  }


  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}

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
