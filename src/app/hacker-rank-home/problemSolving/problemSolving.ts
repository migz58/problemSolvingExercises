import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-problemSolving',
    templateUrl: './problemSolving.html',
    styleUrls: ['../../style/customStyling.scss']
})
export class ProblemSolvingComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    simpleSumArray(){
        this.router.navigate(['/simpleSumArray']);
    }

    compareTriplets(){
        this.router.navigate(['/compareTriplets']);
    }

    diagonalDifference(){
        this.router.navigate(['/diagonalDifference']);
    }

    stairCase(){
        this.router.navigate(['/staircase']);
    }

    goBack() {
        this.router.navigate(['/hackerRankHome']);
    }

}
