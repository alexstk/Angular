import { Injectable } from '@angular/core';}
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({ // this registers the provider with the root injector
  providedIn: 'root' // injector
})
export class HeroService { // provider

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
