import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {

  private dataUrl = './assets/json/football-playout.json';

  constructor(private http: HttpClient) {}

  getFootballData(): Observable<any> {
      return this.http.get<any>(this.dataUrl);
  }


}
