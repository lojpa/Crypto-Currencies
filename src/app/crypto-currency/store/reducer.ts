import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function featureReducer(state = initialState, action: Actions): State {
    switch(action.type) {
        case ActionTypes.GET_CRYPTO_CURRENCIES_REQUEST: {
            return {
                ...state,
                isLoading: true
            };
        }
        case ActionTypes.GET_CRYPTO_CURRENCIES_FAILURE: {
            return {
                ...state,
                isLoading: false
            };
        }
        case ActionTypes.GET_CRYPTO_CURRENCIES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                cryptoCurrencies: action.payload.cryptoCurrencies
            };
        }
        case ActionTypes.GET_CRYPTO_CURRENCY_BY_ID_REQUEST: {
            return {
                ...state,
                isLoading: true
            };
        }
        case ActionTypes.GET_CRYPTO_CURRENCY_BY_ID_FAILURE: {
            return {
                ...state,
                isLoading: false
            };
        }
        case ActionTypes.GET_CRYPTO_CURRENCY_BY_ID_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                cryptoCurrency: action.payload.cryptoCurrency
            };
        }
        default: {
            return state;
        }
    }
}
