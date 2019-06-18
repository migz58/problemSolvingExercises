import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-jsPDFTutorial',
    templateUrl: './jsPDFTutorial.html',
    styleUrls: ['../../style/customStyling.scss']
})
export class JSPDFTutorialComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {}

    goBack(){
        this.router.navigate(['/angularTraining'])
    }
}