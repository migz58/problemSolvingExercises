import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-compareTriplets',
    templateUrl: './compareTriplets.html',
    styleUrls: ['../../../style/customStyling.scss']
})
export class CompareTripletsComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {
        let a = [17,28,30];
        let b = [99,16,8];
        let result = this.compareTriplets(a,b);
        console.log("If Alice has a challenge rating of " + "[" + a + "]" + " \nand Bob has a challenge rating of " + "[" + b + "] \nthe result will be " + "[" + result + "]");
    }

    compareTriplets(a,b){
        let countA = 0, countB = 0;
        for(let i=0; i<a.length; i++){
            if(a[i] > b[i]){
                countA++;
            }else if(a[i] < b[i]){
                countB++;
            }
        }
        return [countA, countB];
    }

    goBack() {
        this.router.navigate(['/problemSolving']);
    }
}