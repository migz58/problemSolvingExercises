import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

//AngularTraining
import { AngularTrainingComponent } from './angularTraining/angularTraining';
import { JSPDFTutorialComponent } from './angularTraining/jsPDFTutorial/jsPDFTutorial';

//HackerRank
import { HackerRankHomeComponent } from './hacker-rank-home/hacker-rank-home.component';
import { ProblemSolvingComponent } from './hacker-rank-home/problemSolving/problemSolving';
import { SimpleArraySumComponent } from './hacker-rank-home/problemSolving/simpleArraySum/simpleArraySum';
import { CompareTripletsComponent } from './hacker-rank-home/problemSolving/compareTriplets/compareTriplets';
import { DiagonalDifferenceComponent } from './hacker-rank-home/problemSolving/diagonalDifference/diagonalDifference';
import { StaircaseComponent } from './hacker-rank-home/problemSolving/staircase/staircase';

import { InterviewPrepComponent } from './hacker-rank-home/interviewPrep/interviewPrep';
import { ArraysComponent } from './hacker-rank-home/interviewPrep/arrays/arrays';
import { LeftRotationComponent } from './hacker-rank-home/interviewPrep/arrays/leftRotation/leftRotation';
import { NewYearChaosComponent } from './hacker-rank-home/interviewPrep/arrays/newYearChaos/newYearChaos';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'angularTraining', component: AngularTrainingComponent },
    { path: 'jsPDFTutorial', component: JSPDFTutorialComponent },

    { path: 'hackerRankHome', component: HackerRankHomeComponent },
    { path: 'problemSolving', component: ProblemSolvingComponent },
    { path: 'simpleSumArray', component: SimpleArraySumComponent },
    { path: 'compareTriplets', component: CompareTripletsComponent },
    { path: 'diagonalDifference', component: DiagonalDifferenceComponent },
    { path: 'staircase', component: StaircaseComponent },

    { path: 'interviewPrep', component: InterviewPrepComponent },
    { path: 'arrays', component: ArraysComponent },
    { path: 'leftRotation', component: LeftRotationComponent },
    { path: 'newYearChaos', component: NewYearChaosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
