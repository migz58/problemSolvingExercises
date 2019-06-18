import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-interviewPrep',
    templateUrl: './interviewPrep.html',
    styleUrls: ['../../style/customStyling.scss']
})
export class InterviewPrepComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {}

    warmUp(){
        alert("Files to be created");
    }

    arrays(){
        this.router.navigate(['/arrays']);
    }

    tipsGuide(){
        alert("Files to be created");
    }

    hashMaps(){
        alert("Files to be created");
    }

    sorting(){
        alert("Files to be created");
    }

    stringMani(){
        alert("Files to be created");
    }

    goBack() {
        this.router.navigate(['/hackerRankHome']);
    }
} 