import { Injectable } from '@angular/core';
import { Currency, CurrencyCode } from '../interfaces/currency';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  currencies: Currency[] = [
    {
      code: 'USD',
      value: 1
    },
    {
      code: 'EGP',
      value: 17
    },
    {
      code: 'EUR',
      value: 0.89
    }
  ];

  protected selectedCurrency = new BehaviorSubject<Currency>(null);

  constructor() {
    const currencyCode = localStorage.getItem('currency');
    let selectedCurrency;
    if (CurrenciesService.isCurrencyCode(currencyCode)) {
      selectedCurrency = this.getCurrency(currencyCode);
    } else {
      selectedCurrency = this.currencies[0];
    }
    this.selectedCurrency.next(selectedCurrency);
  }

  get selectedCurrency$() {
    return this.selectedCurrency.pipe(
      filter(currency => !!currency)
    );
  }

  protected static isCurrencyCode(currencyCode: string): currencyCode is CurrencyCode {
    return currencyCode === 'EGP' || currencyCode === 'USD' || currencyCode === 'EUR';
  }

  changeCurrency(currencyCode: CurrencyCode) {
    console.log(currencyCode);
    const currency = this.getCurrency(currencyCode);
    this.selectedCurrency.next(currency);
    localStorage.setItem('currency', currencyCode);
  }

  protected getCurrency(currencyCode: CurrencyCode): Currency {
    return this.currencies.find(currency => currency.code === currencyCode);
  }
}
