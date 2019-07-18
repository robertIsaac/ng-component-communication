import { Pipe, PipeTransform } from '@angular/core';
import { CurrenciesService } from '../services/currencies.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { formatCurrency, getCurrencySymbol } from '@angular/common';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  constructor(
    protected currenciesService: CurrenciesService,
  ) {
  }

  transform(value: number): Observable<any> {
    return this.currenciesService.selectedCurrency$.pipe(
      map(currency => {
        return formatCurrency(currency.value * value, 'en', getCurrencySymbol(currency.code, 'wide'));
      })
    );
  }

}
