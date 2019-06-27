import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../services/hero.service'

@Component({
    selector: 'app-heros',
    templateUrl: './heros.html',
    styleUrls: ['../../../style/customStyling.scss']
})
export class HerosComponent implements OnInit {
    //heroes: Hero[] = [];
    heroes = HEROES;

    constructor(private router: Router, private heroService: HeroService) { }

    ngOnInit() {
        this.heroService.getHeroes()
            //.subscribe(heroes => this.heroes = heroes);
    }

    getHeroes() {
        this.heroService.getHeroes();
    }

    goBack() {
        this.router.navigate(['/hallOfHeros']);
    }
}