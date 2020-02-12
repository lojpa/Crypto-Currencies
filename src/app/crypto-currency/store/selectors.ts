import { State } from './state';
import { MemoizedSelector, createSelector, createFeatureSelector } from '@ngrx/store';
import { RouterStateUrl } from 'src/app/root-store/router-store/router-state.serializer';
import { RouterReducerState } from '@ngrx/router-store/src';

export const selectCryptoCurrencyState: MemoizedSelector<object, State> = createFeatureSelector<State>('cryptoCurrencies');
export const selectRouterState: MemoizedSelector<object, RouterReducerState<RouterStateUrl>> =
createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const selectIsLoading = createSelector(selectCryptoCurrencyState, cryptoCurrenciesState => cryptoCurrenciesState.isLoading);

export const selectCryptoCurrencies = createSelector(selectCryptoCurrencyState, cryptoCurrenciesState =>
    cryptoCurrenciesState.cryptoCurrencies);
export const selectFilteredCryptoCurrencies = (filter: string) => createSelector(selectCryptoCurrencyState, cryptoCurrenciesState =>
    filter ? cryptoCurrenciesState.cryptoCurrencies.filter(x => x.symbol.includes(filter)) : cryptoCurrenciesState.cryptoCurrencies);

export const selectSelectedCryptoCurrency = createSelector(selectCryptoCurrencyState, selectRouterState,
    (cryptoCurrenciesState, routerState) => { return cryptoCurrenciesState.cryptoCurrencies ? cryptoCurrenciesState.cryptoCurrencies
    .find(x => routerState && routerState.state && routerState.state.params
        && x.id === parseInt(routerState.state.params.id, 10)) : null;
});
