import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/feature/home/home.component';
import { MatchDetailsComponent } from './match-details/feature/match-details/match-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'match/:id', component: MatchDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
