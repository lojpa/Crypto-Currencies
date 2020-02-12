import { Component, OnInit } from '@angular/core';
import { CryptoCurrencyStoreState, CryptoCurrencyStoreSelectors } from '../store';
import { Store } from '@ngrx/store';
import * as featureActions from '../store/actions';
import { FiatCurrencyStoreSelectors } from 'src/app/settings/store';


@Component({
  selector: 'app-crypto-currency-details',
  templateUrl: './crypto-currency-details.component.html',
  styleUrls: ['./crypto-currency-details.component.scss']
})
export class CryptoCurrencyDetailsComponent implements OnInit {

  isLoading$ = this.store$.select(CryptoCurrencyStoreSelectors.selectIsLoading);
  cryptoCurrency$ = this.store$.select(CryptoCurrencyStoreSelectors.selectSelectedCryptoCurrency);
  selectedFiatCurrency$ = this.store$.select(FiatCurrencyStoreSelectors.selectSelectedFiatCurrency);

  constructor(private store$: Store<CryptoCurrencyStoreState.State>) { }

  ngOnInit() {
    this.store$.dispatch(new featureActions.GetCryptoCurrenciesRequestAction());
  }

  refresh(): void {
    this.store$.dispatch(new featureActions.GetCryptoCurrenciesRequestAction());
  }
}
