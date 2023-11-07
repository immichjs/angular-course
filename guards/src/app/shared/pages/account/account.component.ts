import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  public exit() {
    if (confirm('Deseja realmente sair?')) {
      return true;
    } else {
      return false;
    }
  }
}
