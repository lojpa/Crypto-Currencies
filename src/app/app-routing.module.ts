import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/crypto-currency/list', pathMatch: 'full' },
  {
    path: 'crypto-currency',
    component: LayoutComponent,
    loadChildren: () => import('./crypto-currency/crypto-currency.module').then(m => m.CryptoCurrencyModule)
  },
  {
    path: 'settings',
    component: LayoutComponent,
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },
  { path: '**', redirectTo: '/crypto-currency/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
