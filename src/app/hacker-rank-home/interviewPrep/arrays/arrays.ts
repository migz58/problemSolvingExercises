import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-arrays',
    templateUrl: './arrays.html',
    styleUrls: ['../../../style/customStyling.scss']
})
export class ArraysComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {}

    leftRotation(){
        this.router.navigate(['/leftRotation']);
    }

    newYearChaos(){
        this.router.navigate(['/newYearChaos']);
    }

    goBack() {
        this.router.navigate(['/interviewPrep']);
    }
} 