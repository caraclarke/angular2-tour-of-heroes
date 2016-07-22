import {Component, Input} from '@angular/core';
import { Hero } from './hero';
// hero property is an Input

// component decorator
// creating metadata by specificing selector name taht identifies component element
@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})

// export to make available to other components
export class HeroDetailComponent {

  @Input()
  hero: Hero;

}
