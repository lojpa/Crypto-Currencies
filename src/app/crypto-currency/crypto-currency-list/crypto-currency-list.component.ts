import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { CryptoCurrencyStoreState, CryptoCurrencyStoreSelectors } from '../store';
import * as featureActions from '../store/actions';
import { FiatCurrencyStoreSelectors } from 'src/app/settings/store';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crypto-currency-list',
  templateUrl: './crypto-currency-list.component.html',
  styleUrls: ['./crypto-currency-list.component.scss']
})
export class CryptoCurrencyListComponent implements OnInit {

  isLoading$ = this.store$.select(CryptoCurrencyStoreSelectors.selectIsLoading);
  cryptoCurrencies$ = this.store$.select(CryptoCurrencyStoreSelectors.selectCryptoCurrencies);
  selectedFiatCurrency$ = this.store$.select(FiatCurrencyStoreSelectors.selectSelectedFiatCurrency);
  displayedColumns: string[] = ['cmc_rank', 'symbol', 'fiat_price', '24_hour_change'];

  constructor(
    private store$: Store<CryptoCurrencyStoreState.State>,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.store$.dispatch(new featureActions.GetCryptoCurrenciesRequestAction());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.cryptoCurrencies$ = this.store$.select(CryptoCurrencyStoreSelectors.selectFilteredCryptoCurrencies(filterValue));
  }

  refresh(): void {
    this.store$.dispatch(new featureActions.GetCryptoCurrenciesRequestAction());
  }

  openDetails(id: number): void {
    this.router.navigate([`./${id}/details`], { relativeTo: this.activatedRoute.parent });
  }
}
