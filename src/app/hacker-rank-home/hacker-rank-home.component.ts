import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-hacker-rank-home',
    templateUrl: './hacker-rank-home.component.html',
    styleUrls: ['../style/customStyling.scss']
})
export class HackerRankHomeComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    problemSolving() {
        this.router.navigate(['/problemSolving']);
    }

    goBack() {
        this.router.navigate(['/home']);
    }

}
