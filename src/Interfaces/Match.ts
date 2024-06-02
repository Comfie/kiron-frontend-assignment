import { Goal } from "./Goal";

export interface Match {
  homeTeamAbbr: string;
  awayTeamAbbr: string;
  score: { home: number, away: number };
  goals: Goal[];
  state: 'playing' | 'halftime' | 'fulltime';
}
