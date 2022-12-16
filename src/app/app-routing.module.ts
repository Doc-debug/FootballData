import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/feature/home/home.component';
import { MatchDetailsComponent } from './match-details/feature/match-details/match-details.component';
import { TeamDetailsComponent } from './team-details/feature/team-details/team-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'match/:id', component: MatchDetailsComponent },
  { path: 'team/:id', component: TeamDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
