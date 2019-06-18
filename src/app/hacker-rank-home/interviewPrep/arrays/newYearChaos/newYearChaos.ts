import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-newYearChaos',
    templateUrl: './newYearChaos.html',
    styleUrls: ['../../../../style/customStyling.scss']
})
export class NewYearChaosComponent implements OnInit{
    constructor(private router: Router) { }

    ngOnInit(){}

    goBack() {
        this.router.navigate(['/arrays']);
    }
}