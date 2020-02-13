import { State } from './state';
import { MemoizedSelector, createSelector, createFeatureSelector } from '@ngrx/store';

export const selectCryptoCurrencyState: MemoizedSelector<object, State> = createFeatureSelector<State>('cryptoCurrencies');

export const selectIsLoading = createSelector(selectCryptoCurrencyState, cryptoCurrenciesState => cryptoCurrenciesState.isLoading);

export const selectCryptoCurrencies = createSelector(selectCryptoCurrencyState, cryptoCurrenciesState =>
    cryptoCurrenciesState.cryptoCurrencies);
export const selectFilteredCryptoCurrencies = (filter: string) => createSelector(selectCryptoCurrencyState, cryptoCurrenciesState =>
    filter ? cryptoCurrenciesState.cryptoCurrencies.filter(x => x.symbol.includes(filter)) : cryptoCurrenciesState.cryptoCurrencies);

export const selectCryptoCurrency = createSelector(selectCryptoCurrencyState, cryptoCurrenciesState =>
    cryptoCurrenciesState.cryptoCurrency);
