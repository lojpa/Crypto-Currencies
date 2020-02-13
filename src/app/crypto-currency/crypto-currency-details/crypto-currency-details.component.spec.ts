import { CryptoCurrencyDetailsComponent } from './crypto-currency-details.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { platformBrowserDynamicTesting, BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { ScannedActionsSubject, Store } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestStore } from 'src/app/test/test-store';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CryptoCurrencyDetailsComponent', () => {
  let component: CryptoCurrencyDetailsComponent;
  let fixture: ComponentFixture<CryptoCurrencyDetailsComponent>;
  let refreshBtn: DebugElement;


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
      declarations: [ CryptoCurrencyDetailsComponent ],
      providers: [
        Actions,
        ScannedActionsSubject,
        { provide: Store, useClass: TestStore }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CryptoCurrencyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger save', () => {
    spyOn(component, 'refresh');
    refreshBtn = fixture.debugElement.query(By.css('button')).nativeElement
      .click();
    expect(component.refresh)
      .toHaveBeenCalled();
  });
});
