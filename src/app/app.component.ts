import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FootballDataService } from './services/football-data.service';
import { interval } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'KironFrontEndProject';


  constructor() { }

  ngOnInit(): void {
  }


}

