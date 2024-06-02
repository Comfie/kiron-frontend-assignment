import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballPlayoutsComponent } from './football-playouts/football-playouts.component';
import { HttpClientModule } from '@angular/common/http';
import { SceneManagerComponent } from './scene-manager/scene-manager.component';
import { TreeNodeComponent } from './scene-manager/tree-node/tree-node.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CoinDeskComponent } from './coin-desk/coin-desk.component';

@NgModule({
  declarations: [		
    AppComponent,
      FootballPlayoutsComponent,
      SceneManagerComponent,
      TreeNodeComponent,
      LandingPageComponent,
      CoinDeskComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
