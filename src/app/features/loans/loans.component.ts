import { Component, signal, computed } from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [CurrencyPipe, DecimalPipe, FormsModule],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.scss'
})
export class LoansComponent {
  // Current active loans
  activeLoans = signal([
    {
      id: 'loan_1',
      name: 'Residential Home Mortgage',
      number: '•••• 1289',
      principal: 350000.00,
      balance: 320400.00,
      rate: 4.5,
      term: '30 Years',
      nextPaymentDate: new Date(2026, 6, 1),
      nextPaymentAmount: 1773.40
    },
    {
      id: 'loan_2',
      name: 'Personal Equity Line of Credit',
      number: '•••• 7741',
      principal: 10000.00,
      balance: 5000.00,
      rate: 6.2,
      term: 'Revolving',
      nextPaymentDate: new Date(2026, 6, 1),
      nextPaymentAmount: 85.00
    }
  ]);

  // Interactive Loan Calculator state (using Signals)
  calcAmount = signal<number>(150000);
  calcRate = signal<number>(4.5);
  calcTerm = signal<number>(15); // in years

  // Reactively computed monthly payment
  calcMonthlyPayment = computed(() => {
    const p = this.calcAmount();
    const r = (this.calcRate() / 100) / 12; // Monthly rate
    const n = this.calcTerm() * 12; // Total payments

    if (r === 0) {
      return p / n;
    }

    const payment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return payment;
  });

  // Calculate total payment over the lifetime
  calcTotalPayment = computed(() => {
    return this.calcMonthlyPayment() * this.calcTerm() * 12;
  });

  // Calculate total interest over the lifetime
  calcTotalInterest = computed(() => {
    return this.calcTotalPayment() - this.calcAmount();
  });

  // Setters called by input events
  onAmountChange(val: string) {
    this.calcAmount.set(parseFloat(val) || 0);
  }

  onRateChange(val: string) {
    this.calcRate.set(parseFloat(val) || 0);
  }

  onTermChange(val: string) {
    this.calcTerm.set(parseInt(val) || 0);
  }
}
