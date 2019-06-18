import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-angularTraining',
    templateUrl: './angularTraining.html',
    styleUrls: ['../style/customStyling.scss']
})
export class AngularTrainingComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {}

    essentials(){
        alert("Files to be created");
    }

    jsPDFTutorial(){
        this.router.navigate(['/jsPDFTutorial']);
    }

    goBack() {
        this.router.navigate(['/home']);
    }
}