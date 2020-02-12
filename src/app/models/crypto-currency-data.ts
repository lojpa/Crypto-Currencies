import { CryptoCurrencyQuote } from './crypto-currency-quote';

export class CryptoCurrencyData {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    cmc_rank: number;
    num_market_pairs: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    last_updated: Date;
    date_added: Date;
    tags: Array<string>;
    platform: string;
    quote: CryptoCurrencyQuote;
}
