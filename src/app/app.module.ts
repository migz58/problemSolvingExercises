import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//Angular Training
import { AngularTrainingComponent } from './angularTraining/angularTraining';
import { JSPDFTutorialComponent } from './angularTraining/jsPDFTutorial/jsPDFTutorial';
//Hall Of Heros
import { HallOfHerosComponent } from './angularTraining/hallOFHeros/hallOFHeros';
import { HeroDashboardComponent } from './angularTraining/hallOFHeros/dashboard/heroDashboard';
import { HerosComponent } from './angularTraining/hallOFHeros/heros/heros';
import { HeroDetailComponent } from './angularTraining/hallOFHeros/heroDetail/heroDetail';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AngularTrainingComponent,
    JSPDFTutorialComponent,
    HallOfHerosComponent,
    HeroDashboardComponent,
    HerosComponent,
    HeroDetailComponent,

    HackerRankHomeComponent,
    ProblemSolvingComponent,
    SimpleArraySumComponent,
    CompareTripletsComponent,
    DiagonalDifferenceComponent,
    StaircaseComponent,
    
    InterviewPrepComponent,
    ArraysComponent,
    LeftRotationComponent,
    NewYearChaosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
