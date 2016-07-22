// when we need something from a module or library we import it
// here importing angular2 core so component code can access @Component decorator
import {Component} from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

// decorator function that takes a metadata object as argument
// allows us to associate metadata with component data
// metadata tells angular how to create and use this component
@Component({
  selector: 'my-app',
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

    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name" />
      </div>
    </div>
  `
})

// export AppComponent so we can import it elsewhere in application
export class AppComponent {

  title = "Tour of heroes";
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}

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

(*) prefix to ngFor is critical - indicates that the li element and its children are a master template

quoted text means "take each hero in the heroes array, store it in the local hero variable, and make it available to the corresponding template instance"

let keyword is what identifies hero as template input veriable, can now reference that var within template to access props

*click event* - parenthesis identify li click event as target. hero var passed in is same one we previously defined for ngFor

[] syntax for *property binding* - binding that allows data flows one way from data source to a property of the class
*/

// temp array of heroes
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
