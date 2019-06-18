import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-diagonalDifference',
    templateUrl: './diagonalDifference.html',
    styleUrls: ['../../../style/customStyling.scss']
})
export class DiagonalDifferenceComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {
        let ar = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
        let result = this.diagonalDifference(ar);
        console.log(result);
    }

    diagonalDifference(arr) {
        let diagonal1 = 0, diagonal2 = 0;

        // Looping through the array and summing the diagonals.
        for (let i = 0; i < arr.length; i++) {
            // Calculating the primary diagonal.
            diagonal1 += arr[i][i];
            // Reversing the second dimension of array to calculate secondary diagonal.
            diagonal2 += arr[arr.length - 1 - i][i]
        }
        // return absolute difference value.
        return Math.abs(diagonal1 - diagonal2);
    }

    goBack() {
        this.router.navigate(['/problemSolving']);
    }
}