import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-staircase',
    templateUrl: './staircase.html',
    styleUrls: ['../../../style/customStyling.scss']
})
export class StaircaseComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {
        let number = 4;
        let result = this.staircase(number);
    }

    staircase(n) {
        const line = Array(n + 1).fill(' ');
        for (let i = n - 1; i >= 0; i--) {
            line[i] = '#';
            console.log(line.join(''));
        }
    }

    goBack() {
        this.router.navigate(['/problemSolving']);
    }
}