import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-leftRotation',
    templateUrl: './leftRotation.html',
    styleUrls: ['../../../../style/customStyling.scss']
})
export class LeftRotationComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {
        let a = [1, 2, 3, 4, 5];
        let d = 4;
        let result = this.leftRotation(a, d);
        console.log("Array(a): [" + a + "] with " + d + " Steps(d) will return [" + result + "]");
    }

    leftRotation(a, d) {
        var arr = [];
        for (var i = 0; i < a.length; i++) {
            arr.push(a[i]);
        };
        for (var j = 1; j <= d; j++) {
            //COMMENTED OUT CAUSE IT BROKE THE PROJECT ON RESTART
            //arr.shift(arr.push(arr[0]));
        }
        return arr;
    }

    goBack() {
        this.router.navigate(['/arrays']);
    }
} 