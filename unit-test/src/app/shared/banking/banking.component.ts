import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css'],
})
export class BankingComponent {
  private balance: number = 10;
  private wallet: number = 50;

  get getBalance(): number {
    return this.balance;
  }

  get getWallet(): number {
    return this.wallet;
  }

  public setWithdraw(value: string): number | undefined {
    const withdraw = Number(value);

    if (isNaN(withdraw) || this.balance < withdraw) {
      return;
    }

    this.balance -= withdraw;

    return (this.wallet += withdraw);
  }

  public setDeposit(value: string): number | undefined {
    const deposit = Number(value);

    if (isNaN(deposit) || this.wallet < deposit) {
      return;
    }

    this.wallet -= deposit;

    return (this.balance += deposit);
  }
}
