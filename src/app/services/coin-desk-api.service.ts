import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinDeskApiService {

  private dataUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';

  constructor(private http: HttpClient) { }

  getCurrentPrice(): Observable<any> {
    return this.http.get(this.dataUrl);
  }

}
