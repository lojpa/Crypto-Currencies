import { SettingsRoutingModule } from './settings/settings-routing.module';
import { SettingsModule } from './settings/settings.module';
import { CryptoCurrencyRoutingModule } from './crypto-currency/crypto-currency-routing.module';
import { CryptoCurrencyModule } from './crypto-currency/crypto-currency.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FiatCurrencyStoreModule } from './settings/store/fiat-currency-store.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptoCurrencyListComponent } from './crypto-currency/crypto-currency-list/crypto-currency-list.component';
import { CryptoCurrencyDetailsComponent } from './crypto-currency/crypto-currency-details/crypto-currency-details.component';
import { RootStoreModule } from './root-store';
import { CryptoCurrencyStoreModule } from './crypto-currency/store';
import { CryptoCurrencyService } from './crypto-currency/crypto-currency.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './settings/settings.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    CryptoCurrencyModule,
    CryptoCurrencyRoutingModule,
    RootStoreModule,
    CryptoCurrencyStoreModule,
    FiatCurrencyStoreModule,
    SettingsModule,
    SettingsRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    CryptoCurrencyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
