import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['../style/customStyling.scss']
})
export class HomeComponent implements OnInit {
    title = 'Problem Solving Exercises';
    constructor(private router: Router) { }

    ngOnInit() {
    }

    hackerRankHome(){
        this.router.navigate(['/hackerRankHome']);
    }

}
