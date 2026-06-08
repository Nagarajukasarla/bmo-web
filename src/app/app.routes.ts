import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AccountsComponent } from './features/accounts/accounts.component';
import { LoansComponent } from './features/loans/loans.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'loans', component: LoansComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

