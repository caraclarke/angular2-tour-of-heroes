import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {

  getHeroes() {
    return Promise.resolve(HEROES);
  }

}

/*

import angular Injectable funtion and applied to export as @Injectable() decorator **parenthesis are super important**

TypeScript sees the @Injectable() decorator and emits metadata about our service

*/
