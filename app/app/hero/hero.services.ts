import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes() {
        return HEROES;
    }

}
/**
 * Created by jam on 8/12/16.
 */
