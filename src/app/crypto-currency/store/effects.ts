import { RouterReducerState } from '@ngrx/router-store';
import { Injectable } from '@angular/core';
import { CryptoCurrencyService } from 'src/app/crypto-currency/crypto-currency.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import { CryptoCurrencyStoreState, CryptoCurrencyStoreSelectors } from '.';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import * as featureActions from './actions';
import { withLatestFrom, switchMap, map, catchError, tap, exhaustMap } from 'rxjs/operators';
import { RouterStoreSelectors } from 'src/app/root-store/router-store';
import { RouterStateUrl } from 'src/app/root-store/router-store/router-state.serializer';
import { FiatCurrencyStoreSelectors } from 'src/app/settings/store';
import { FiatCurrency } from 'src/app/models/fiat-currency';

@Injectable()
export class CryptoCurrencyStoreEffects {
    constructor(
        private actions$: Actions,
        private cryptoCurrencyService: CryptoCurrencyService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private store$: Store<CryptoCurrencyStoreState.State>
    ) { }

    @Effect() getCryptoCurrenciesRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.GetCryptoCurrenciesRequestAction>(
            featureActions.ActionTypes.GET_CRYPTO_CURRENCIES_REQUEST),
            withLatestFrom(
                this.store$.select(RouterStoreSelectors.getRouterStoreState),
                this.store$.select(FiatCurrencyStoreSelectors.selectSelectedFiatCurrency)
            ),
            // tslint:disable-next-line: max-line-length
            exhaustMap(([action, routerState, selectedFiatCurrency]: [featureActions.GetCryptoCurrenciesRequestAction, RouterReducerState<RouterStateUrl>, FiatCurrency]) => {
                return this.cryptoCurrencyService.getCryptoCurrencies(selectedFiatCurrency.fiatCurrency)
                .pipe(map(result => new featureActions.GetCryptoCurrenciesSuccessAction({
                    cryptoCurrencies: result.data
                })
                ),
                catchError(error =>
                    of(new featureActions.GetCryptoCurrenciesFailureAction({ error })))
                );
            })
   );
   @Effect({dispatch: false}) getCryptoCurrenciesFailureEffect$: Observable<Action> = this.actions$.pipe(
       ofType<featureActions.GetCryptoCurrenciesFailureAction>(
           featureActions.ActionTypes.GET_CRYPTO_CURRENCIES_FAILURE),
       tap(() => {
        alert('Get Crypto Currencies is failed');
       })
   );
}
