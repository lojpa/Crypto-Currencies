import { FiatCurrency } from 'src/app/models/fiat-currency';

export interface State {
    isLoading?: boolean;
    fiatCurrencies: Array<FiatCurrency>;
    selectedFiatCurrency: FiatCurrency;
}

export const initialState: State = {
    isLoading: false,
    fiatCurrencies: [new FiatCurrency('USD'), new FiatCurrency('EUR'), new FiatCurrency('CNY')],
    selectedFiatCurrency: new FiatCurrency('USD')
};