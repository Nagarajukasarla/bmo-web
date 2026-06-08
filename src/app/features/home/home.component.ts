import { Component, signal } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Financial Overview signals
  totalAssets = signal(253661.35);
  totalLiabilities = signal(325400.00);
  netWorth = signal(-71738.65); // Assets - Liabilities

  // Dashboard quick stats
  monthlyIncome = signal(8450.00);
  monthlySpending = signal(4210.15);
  savingsRate = signal(50.1);

  // Recent transactions list
  recentTransactions = signal([
    { id: 1, merchant: 'Supermarket Store', category: 'Groceries', amount: -142.50, date: new Date(2026, 5, 4), status: 'Completed' },
    { id: 2, merchant: 'Employer Corp Payroll', category: 'Income', amount: 4225.00, date: new Date(2026, 5, 1), status: 'Completed' },
    { id: 3, merchant: 'Electric Utility Co', category: 'Utilities', amount: -85.12, date: new Date(2026, 4, 28), status: 'Completed' },
    { id: 4, merchant: 'Gourmet Restaurant', category: 'Dining Out', amount: -112.40, date: new Date(2026, 4, 27), status: 'Completed' },
    { id: 5, merchant: 'Online Retailer Store', category: 'Shopping', amount: -65.99, date: new Date(2026, 4, 25), status: 'Pending' }
  ]);
}
