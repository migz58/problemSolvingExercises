import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../services/hero.service'

@Component({
    selector: 'app-heroDetail',
    templateUrl: './heroDetail.html',
    styleUrls: ['../../../style/customStyling.scss']
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;
    
    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location) { }

    ngOnInit() {
        this.getHero();
    }

    getHero() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero);
    }

    goBack() {
        this.location.back();
    }
}