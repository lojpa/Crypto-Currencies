import { FiatCurrencyStoreEffects } from './effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureReducer } from './reducer';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        StoreModule.forFeature('fiatCurrencies', featureReducer),
        EffectsModule.forFeature([FiatCurrencyStoreEffects])
    ],
    providers: [FiatCurrencyStoreEffects]
})
export class FiatCurrencyStoreModule {

}
