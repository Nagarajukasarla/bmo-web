import { Component, signal } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})

export class AccountsComponent {
  // Accounts mock database
  accounts = signal([
    {
      id: 'acc_1',
      name: 'Premium Chequing',
      number: '•••• 4820',
      routing: '002100021',
      balance: 12450.80,
      type: 'checking',
      color: 'blue'
    },
    {
      id: 'acc_2',
      name: 'High-Interest Savings',
      number: '•••• 9152',
      routing: '002100021',
      balance: 84210.15,
      type: 'savings',
      color: 'teal'
    },
    {
      id: 'acc_3',
      name: 'Global Equities Investment',
      number: '•••• 1104',
      routing: '003900084',
      balance: 156900.40,
      type: 'investment',
      color: 'purple'
    }
  ]);

  selectedAccount = signal<string>('acc_1');

  selectAccount(id: string) {
    this.selectedAccount.set(id);
  }

  // Calculated getters
  get currentSelectedAccount() {
    return this.accounts().find(acc => acc.id === this.selectedAccount()) || this.accounts()[0];
  }
}
