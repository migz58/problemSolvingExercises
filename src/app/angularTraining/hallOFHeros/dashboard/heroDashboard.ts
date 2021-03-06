import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../services/hero.service'

@Component({
    selector: 'app-heroDashboard',
    templateUrl: './heroDashboard.html',
    styleUrls: ['../../../style/customStyling.scss']
})
export class HeroDashboardComponent implements OnInit {
    //heroes: Hero[] = [];
    heroes = HEROES;

    constructor(private router: Router, private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.heroService.getHeroes()
            //.subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }

    goBack() {
        this.router.navigate(['/hallOfHeros']);
    }
}