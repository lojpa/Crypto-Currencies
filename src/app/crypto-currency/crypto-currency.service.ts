import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CryptoCurrenciesResponse } from '../models/crypto-currencies-response';
import { CryptoCurrencyResponse } from '../models/crypto-currency-response';

@Injectable()
export class CryptoCurrencyService {
  private httpOptions = {
    withCrededentials: true,
    headers: new HttpHeaders({
      'X-CMC_PRO_API_KEY': '565df400-2f62-45b5-8f27-4b6d780b4f10',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getCryptoCurrencies(fiatCurrency: string): Observable<CryptoCurrenciesResponse> {
    return this.http.get<CryptoCurrenciesResponse>(`/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=${fiatCurrency}`,
     this.httpOptions);
  }

  getCryptoCurrencyById(fiatCurrency: string, id: number): Observable<CryptoCurrencyResponse> {
     return this.http.get<CryptoCurrencyResponse>(`/v1/cryptocurrency/quotes/latest?convert=${fiatCurrency}&id=${id}`, this.httpOptions);
  }
}
