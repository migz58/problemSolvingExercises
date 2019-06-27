import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-hallOfHeros',
    templateUrl: './hallOfHeros.html',
    styleUrls: ['../../style/customStyling.scss']
})
export class HallOfHerosComponent implements OnInit {
    title = 'Tour of Heroes';
    dash: boolean = true;

    constructor(private router: Router) { }

    ngOnInit() {}

    selectHeroDash(){
        this.dash = true;
    }

    selectHeros(){
        this.dash = false;
    }

    goBack() {
        this.router.navigate(['/angularTraining']);
        this.dash = true;
    }
}