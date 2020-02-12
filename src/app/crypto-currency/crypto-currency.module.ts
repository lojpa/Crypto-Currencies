import { CryptoCurrencyListComponent } from './crypto-currency-list/crypto-currency-list.component';
import { CryptoCurrencyDetailsComponent } from './crypto-currency-details/crypto-currency-details.component';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CryptoCurrencyRoutingModule } from './crypto-currency-routing.module';

@NgModule({
  declarations: [CryptoCurrencyListComponent, CryptoCurrencyDetailsComponent],
  imports: [SharedModule, CryptoCurrencyRoutingModule],
  exports: []
})
export class CryptoCurrencyModule {}
