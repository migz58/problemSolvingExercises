import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-simpleArraySum',
    templateUrl: './simpleArraySum.html',
    styleUrls: ['../../../style/customStyling.scss']
})
export class SimpleArraySumComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {
        let ar = [1, 2, 3, 4, 10, 11];
        let result = this.simpleArraySum(ar);
        console.log("Answer for summed array "+ "[" + ar + "]" + " = " + result);
    }

    simpleArraySum(ar) {
        var sum = 0
        for (let i = 0; i < ar.length; i++) {
            sum += ar[i];
        }
        return sum;
    }

    goBack() {
        this.router.navigate(['/problemSolving']);
    }

}
