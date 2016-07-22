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
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name" />
    </div>
  `
})

// export AppComponent so we can import it elsewhere in application
export class AppComponent {

  title = "Tour of heroes";
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

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
