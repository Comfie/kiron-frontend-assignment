import { Component, OnInit } from '@angular/core';
import { CoinDeskApiService } from '../services/coin-desk-api.service';

@Component({
  selector: 'app-coin-desk',
  templateUrl: './coin-desk.component.html',
  styleUrls: ['./coin-desk.component.css']
})
export class CoinDeskComponent implements OnInit {

  bitcoinPrice: any;

  constructor(private _coinDeskApiService: CoinDeskApiService) {}

  async ngOnInit(): Promise<void> {
    this._coinDeskApiService.getCurrentPrice().subscribe(data => {
      this.bitcoinPrice = data;
    });
  }

}
