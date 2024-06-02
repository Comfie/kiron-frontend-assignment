import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FootballPlayoutsComponent } from './football-playouts/football-playouts.component';
import { SceneManagerComponent } from './scene-manager/scene-manager.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CoinDeskComponent } from './coin-desk/coin-desk.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'football-playouts', component: FootballPlayoutsComponent },
  { path: 'scene-manager', component: SceneManagerComponent },
  { path: 'coin-desk', component: CoinDeskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
