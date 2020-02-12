import { State } from './state';
import { MemoizedSelector, createSelector, createFeatureSelector } from '@ngrx/store';
import { FiatCurrency } from 'src/app/models/fiat-currency';

export const selectFiatCurrencyState: MemoizedSelector<object, State> = createFeatureSelector<State>('fiatCurrencies');
export const selectFiatCurrencies = createSelector(selectFiatCurrencyState, fiatCurrenciesState => fiatCurrenciesState.fiatCurrencies);
export const selectSelectedFiatCurrency = createSelector(selectFiatCurrencyState, fiatCurrenciesState => fiatCurrenciesState.selectedFiatCurrency);
