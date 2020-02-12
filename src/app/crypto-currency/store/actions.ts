import { Action } from '@ngrx/store';
import { CryptoCurrencyData } from 'src/app/models/crypto-currency-data';

export enum ActionTypes {
  GET_CRYPTO_CURRENCIES_REQUEST = '[Crypto Currency] Get Crypto Currencies Request',
  GET_CRYPTO_CURRENCIES_FAILURE = '[Crypto Currency] Get Crypto Currencies Failure',
  GET_CRYPTO_CURRENCIES_SUCCESS = '[Crypto Currency] Get Crypto Currencies Success',

  GET_CRYPTO_CURRENCY_BY_ID_REQUEST = '[Crypto Currency] Get Crypto Currency By Id Request',
  GET_CRYPTO_CURRENCY_BY_ID_FAILURE = '[Crypto Currency] Get Crypto Currency By Id Failure',
  GET_CRYPTO_CURRENCY_BY_ID_SUCCESS = '[Crypto Currency] Get Crypto Currency By Id Success'
}

export class GetCryptoCurrenciesRequestAction implements Action {
  readonly type = ActionTypes.GET_CRYPTO_CURRENCIES_REQUEST;
}

export class GetCryptoCurrenciesFailureAction implements Action {
  readonly type = ActionTypes.GET_CRYPTO_CURRENCIES_FAILURE;
  constructor(public payload: { error: any }) {}
}

export class GetCryptoCurrenciesSuccessAction implements Action {
  readonly type = ActionTypes.GET_CRYPTO_CURRENCIES_SUCCESS;
  constructor(
    public payload: { cryptoCurrencies: Array<CryptoCurrencyData> }
  ) {}
}

export class GetCryptoCurrencyByIdRequestAction implements Action {
  readonly type = ActionTypes.GET_CRYPTO_CURRENCY_BY_ID_REQUEST;
}

export class GetCryptoCurrencyByIdFailureAction implements Action {
  readonly type = ActionTypes.GET_CRYPTO_CURRENCY_BY_ID_FAILURE;
  constructor(public payload: { error: any }) {}
}

export class GetCryptoCurrencyByIdSuccessAction implements Action {
  readonly type = ActionTypes.GET_CRYPTO_CURRENCY_BY_ID_SUCCESS;
  constructor(public payload: { cryptoCurrency: CryptoCurrencyData }) {}
}

export type Actions =
  | GetCryptoCurrenciesRequestAction
  | GetCryptoCurrenciesFailureAction
  | GetCryptoCurrenciesSuccessAction
  | GetCryptoCurrencyByIdRequestAction
  | GetCryptoCurrencyByIdFailureAction
  | GetCryptoCurrencyByIdSuccessAction;
