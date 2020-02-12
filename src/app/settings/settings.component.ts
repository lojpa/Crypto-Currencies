import { Component, OnInit } from '@angular/core';
import { FiatCurrencyStoreSelectors, FiatCurrencyStoreState } from './store';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as featureActions from '../settings/store/actions';
import { FiatCurrency } from '../models/fiat-currency';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  fiatCurrencies$ = this.store$.select(
    FiatCurrencyStoreSelectors.selectFiatCurrencies
  );
  selectedFiatCurrency$ = this.store$.select(
    FiatCurrencyStoreSelectors.selectSelectedFiatCurrency
  );
  formGroup: FormGroup;

  constructor(
    private store$: Store<FiatCurrencyStoreState.State>,
    formBuilder: FormBuilder
  ) {
    this.formGroup = formBuilder.group({
      fiatCurrency: [null, []]
    });
  }

  ngOnInit() {}

  compareFn(c1: string, c2: string): boolean {
    return c1 === c2;
  }

  selectFiatCurrency() {
    if (this.formGroup.valid) {
      const fiatCurrency = this.formGroup.get('fiatCurrency').value;
      this.store$.dispatch(
        new featureActions.SelectFiatCurrencyRequestAction({ fiatCurrency })
      );
    }
  }
}
