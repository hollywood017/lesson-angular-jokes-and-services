import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MyCounter2Component } from './my-counter-2/my-counter-2.component';
import { CounterService } from './counter.service';
import { JokesService } from './jokes.service';
import { JokesComponent } from './jokes/jokes.component';
import { BothCountersComponent } from './both-counters/both-counters.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    MyCounter2Component,
    JokesComponent,
    BothCountersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  //we are not inlcuding our jokes service in this providers array because 
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
