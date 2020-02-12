import { CryptoCurrencyDetailsComponent } from './crypto-currency-details/crypto-currency-details.component';
import { RouterModule, Routes } from '@angular/router';
import { CryptoCurrencyListComponent } from './crypto-currency-list/crypto-currency-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'list', component: CryptoCurrencyListComponent },
  {path: ':id/details', component: CryptoCurrencyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoCurrencyRoutingModule {}
