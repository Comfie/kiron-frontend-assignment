import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
  }

  footballPlayout() {
    this.routes.navigate(['/football-playouts']);
  }

  sceneManager(){
    this.routes.navigate(['/scene-manager']);
  }

  coindesk(){
    this.routes.navigate(['/coin-desk']);
  }


}
