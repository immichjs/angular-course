import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { ListComponent } from '../investiments/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { ListInvestimentsService } from '../investiments/services/list-investiments.service';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingComponent, ListComponent],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getBalance(): Deve haver o valor {10} no saldo', () => {
    expect(component.getBalance).toEqual(10);
  });

  it('(U) getWallet(): Deve haver o valor {50} na carteira', () => {
    expect(component.getWallet).toEqual(50);
  });

  it('(U) setDeposit(): Deve depositar {10} da carteira disponível', () => {
    component.setDeposit('10');

    expect(component.getBalance).toEqual(20);
    expect(component.getWallet).toEqual(40);
  });

  it('(U) setDeposit(): Deve depositar para o saldo onde a carteira é menor que o valor', () => {
    expect(component.setDeposit('string')).not.toBeTruthy();
    expect(component.setDeposit('100')).not.toBeTruthy();

    expect(component.getWallet).not.toEqual(-50);
    expect(component.getBalance).not.toEqual(110);
  });

  it('(I) setDeposit(): Deve depositar {10} da carteira disponível', () => {
    const element = fixture.debugElement.nativeElement;

    element.querySelector('#deposit-input').value = '10';
    element.querySelector('#deposit').click();
    fixture.detectChanges();

    expect(element.querySelector('#get-balance').textContent).toEqual('20');
    expect(element.querySelector('#get-wallet').textContent).toEqual('40');

    expect(component.getBalance).toEqual(20);
    expect(component.getWallet).toEqual(40);
  });

  it('(U) setWithdraw(): Deve sacar {10} do saldo disponível', () => {
    component.setWithdraw('10');

    expect(component.getWallet).toEqual(60);
    expect(component.getBalance).toEqual(0);
  });

  it('(U) setWithdraw(): Deve sacar para a carteira onde o saldo é menor que o valor', () => {
    expect(component.setWithdraw('string')).not.toBeTruthy();
    expect(component.setWithdraw('100')).not.toBeTruthy();

    expect(component.getBalance).not.toEqual(110);
    expect(component.getWallet).not.toEqual(-50);
  });

  it('(I) setWithdraw(): Deve sacar {10} do saldo disponível', () => {
    const element = fixture.debugElement.nativeElement;

    element.querySelector('#withdraw-input').value = '10';
    element.querySelector('#withdraw').click();
    fixture.detectChanges();

    expect(element.querySelector('#get-wallet').textContent).toEqual('60');
    expect(element.querySelector('#get-balance').textContent).toEqual('0');

    expect(component.getWallet).toEqual(60);
    expect(component.getBalance).toEqual(0);
  });
});
