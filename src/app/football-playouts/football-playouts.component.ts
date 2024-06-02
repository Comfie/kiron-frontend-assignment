import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { FootballDataService } from '../services/football-data.service';
import { PlayoutConfig } from '../../Interfaces/PlayoutConfig';

@Component({
  selector: 'app-football-playouts',
  templateUrl: './football-playouts.component.html',
  styleUrls: ['./football-playouts.component.css']
})

export class FootballPlayoutsComponent implements OnInit {

  matches: any[] = [];
  config: PlayoutConfig = { msPerGamePeriod: 0, break: 0 };

  constructor(private footballDataService: FootballDataService) {}

  async ngOnInit(): Promise<void> {
      this.footballDataService.getFootballData().subscribe(data => {
          this.config = data.config;
          this.matches = data.data.map((match: any) => ({
            ...match,
            score: { home: 0, away: 0 },
            state: 'playing'
          }));;
      });
  }

  startPlayout() {
    this.matches.forEach(match => {
      match.score = { home: 0, away: 0 };
      match.state = 'playing';

      // Sort goals by videoMS to play them in the correct order
      match.goals.sort((a: { videoMS: number; }, b: { videoMS: number; }) => a.videoMS - b.videoMS);

      // Handle goal playout
      let goalIndex = 0;
      const gameDuration = 2 * 30000; // Assuming 30 seconds per half as per your JSON config
      const halftimeDuration = 5000; // Assuming 5 seconds for halftime

      const subscription = interval(1000).subscribe(ms => {
        const elapsed = ms * 1000;

        if (elapsed >= gameDuration + halftimeDuration) {
          match.state = 'fulltime';
          subscription.unsubscribe();
        } else if (elapsed >= 30000 && elapsed < 30000 + halftimeDuration) {
          match.state = 'halftime';
        } else if (elapsed >= 30000 + halftimeDuration) {
          match.state = 'playing';
        }

        while (goalIndex < match.goals.length && match.goals[goalIndex].videoMS <= elapsed) {
          const goal = match.goals[goalIndex];
          if (goal.teamAbbr === match.homeTeamAbbr) {
            match.score.home++;
          } else {
            match.score.away++;
          }
          goalIndex++;
        }
      });
    });
  }

  getScoreText(match: any): string {
    if (match.state === 'halftime') {
      return `Halftime: ${match.score.home} - ${match.score.away}`;
    } else if (match.state === 'fulltime') {
      return `Full time:  ${match.score.home} - ${match.score.away}`;
    } else {
      return `Score: ${match.score.home} - ${match.score.away}`;
    }
  }
}
