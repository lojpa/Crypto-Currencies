import { CryptoCurrencyData } from './crypto-currency-data';
import { CryptoCurrencyResponseStatus } from './crypto-currency-respone-status';

export class CryptoCurrencyResponse {
    data: Array<CryptoCurrencyData>;
    status: CryptoCurrencyResponseStatus;
}
