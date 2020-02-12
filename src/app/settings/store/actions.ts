import { Action } from '@ngrx/store';
import { FiatCurrency } from 'src/app/models/fiat-currency';

export enum ActionTypes {
  GET_FIAT_CURRENCIES_REQUEST = '[Settings] Get Fiat Currencies Request',
  GET_FIAT_CURRENCIES_FAILURE = '[Settings] Get Fiat Currencies Failure',
  GET_FIAT_CURRENCIES_SUCCESS = '[Settings] Get Fiat Currencies Success',

  SELECT_FIAT_CURRENCY_REQUEST = '[Settings] Select Fiat Currency Request',
  SELECT_FIAT_CURRENCY_FAILURE = '[Settings] Select Fiat Currency Failure',
  SELECT_FIAT_CURRENCY_SUCCESS = '[Settings] Select Fiat Currency Success'
}

export class GetFiatCurrenciesRequestAction implements Action {
  readonly type = ActionTypes.GET_FIAT_CURRENCIES_REQUEST;
}

export class GetFiatCurrenciesFailureAction implements Action {
  readonly type = ActionTypes.GET_FIAT_CURRENCIES_FAILURE;
  constructor(public payload: { error: any }) {}
}

export class GetFiatCurrenciesSuccessAction implements Action {
  readonly type = ActionTypes.GET_FIAT_CURRENCIES_SUCCESS;
  constructor(public payload: { fiatCurrencies: Array<string> }) {}
}

export class SelectFiatCurrencyRequestAction implements Action {
  readonly type = ActionTypes.SELECT_FIAT_CURRENCY_REQUEST;
  constructor(public payload: { fiatCurrency: string }) {}
}

export class SelectFiatCurrencyFailureAction implements Action {
  readonly type = ActionTypes.SELECT_FIAT_CURRENCY_FAILURE;
  constructor(public payload: { error: any }) {}
}

export class SelectFiatCurrencySuccessAction implements Action {
  readonly type = ActionTypes.SELECT_FIAT_CURRENCY_SUCCESS;
}

export type Actions =
  | GetFiatCurrenciesRequestAction
  | GetFiatCurrenciesFailureAction
  | GetFiatCurrenciesSuccessAction
  | SelectFiatCurrencyRequestAction
  | SelectFiatCurrencyFailureAction
  | SelectFiatCurrencySuccessAction;
