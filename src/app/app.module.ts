import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HackerRankHomeComponent } from './hacker-rank-home/hacker-rank-home.component';
import { ProblemSolvingComponent } from './hacker-rank-home/problemSolving/problemSolving';
import { SimpleArraySumComponent } from './hacker-rank-home/problemSolving/simpleArraySum/simpleArraySum';
import { CompareTripletsComponent } from './hacker-rank-home/problemSolving/compareTriplets/compareTriplets';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HackerRankHomeComponent,
    ProblemSolvingComponent,
    SimpleArraySumComponent,
    CompareTripletsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
