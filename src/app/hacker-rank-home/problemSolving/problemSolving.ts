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

    veryBigSum(){
        //this.router.navigate([]);
        alert("Still need to create Big sum files; Go get it BOI");
    }

    goBack() {
        this.router.navigate(['/hackerRankHome']);
    }

}
