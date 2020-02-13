import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { platformBrowserDynamicTesting, BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { ScannedActionsSubject, Store } from '@ngrx/store';
import { TestStore } from '../test/test-store';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
      platformBrowserDynamicTesting());
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatNativeDateModule,
        SharedModule,
        RouterModule.forRoot([])
      ],
      declarations: [ SettingsComponent ],
      providers: [
        Actions,
        ScannedActionsSubject,
        { provide: Store, useClass: TestStore }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have value USD when USD is selected', () => {
    component.formGroup.get('fiatCurrency')
      .setValue('USD');

    expect(component.formGroup.get('fiatCurrency').value).toEqual('USD');
  });
});
