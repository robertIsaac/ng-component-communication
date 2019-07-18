export interface Currency {
  code: CurrencyCode;
  value: number;
}

export type CurrencyCode = 'EGP' | 'USD' | 'EUR';
