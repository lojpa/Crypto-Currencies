import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';
import { FiatCurrency } from 'src/app/models/fiat-currency';

export function featureReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.SELECT_FIAT_CURRENCY_REQUEST: {
            return {
                ...state,
                selectedFiatCurrency: new FiatCurrency(action.payload.fiatCurrency)
            };
        }
        default: {
            return state;
        }
    }
}
