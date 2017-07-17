import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//imports our component into the file
import { AppComponent } from './app.component';
import { JokesComponent } from './jokes/jokes.component';
import { BothCountersComponent } from './both-counters/both-counters.component';

const routes: Routes = [
  {
    path: 'counter',
    component: BothCountersComponent
  },
  {
    path: 'jokes',
    component: JokesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
