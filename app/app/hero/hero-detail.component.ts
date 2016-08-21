import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.services';

@Component({
    selector: 'my-hero-detail',
    templateUrl: './app/hero/hero-detail.component.html',
    styleUrls: ['./app/hero/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @Input()  hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    goBack(): void {
        window.history.back();
    }
}
/**
 * Created by jam on 8/12/16.
 */
