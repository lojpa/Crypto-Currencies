import { Injectable } from '@angular/core';
import { CryptoCurrencyService } from 'src/app/crypto-currency/crypto-currency.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FiatCurrencyStoreState } from '.';

@Injectable()
export class FiatCurrencyStoreEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private store$: Store<FiatCurrencyStoreState.State>
    ) { }
}
