import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../services/currencies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currencies = this.currenciesService.currencies;
  selectedCurrency$ = this.currenciesService.selectedCurrency$;

  constructor(
    protected currenciesService: CurrenciesService,
  ) {
  }

  ngOnInit() {
  }

  changeCurrency(event) {
    this.currenciesService.changeCurrency(event.value);
  }
}
