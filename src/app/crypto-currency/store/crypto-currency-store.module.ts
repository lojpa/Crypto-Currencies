import { CryptoCurrencyStoreEffects } from './effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureReducer } from './reducer';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        StoreModule.forFeature('cryptoCurrencies', featureReducer),
        EffectsModule.forFeature([CryptoCurrencyStoreEffects])
    ],
    providers: [CryptoCurrencyStoreEffects]
})
export class CryptoCurrencyStoreModule {

}
