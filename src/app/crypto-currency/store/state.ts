import { CryptoCurrencyData } from 'src/app/models/crypto-currency-data';

export interface State {
    isLoading?: boolean;
    cryptoCurrencies: Array<CryptoCurrencyData>;
    selectedCryptoCurrency: CryptoCurrencyData;
}

export const initialState: State = {
    isLoading: false,
    cryptoCurrencies: [],
    selectedCryptoCurrency: undefined
};