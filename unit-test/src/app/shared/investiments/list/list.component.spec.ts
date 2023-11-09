import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { HttpClientModule } from '@angular/common/http';
import { ListInvestimentsService } from '../services/list-investiments.service';
import { Investiments } from '../model/investiments';
import { MOCK_LIST } from '../services/list-investiments.mock';
import { of } from 'rxjs';

const mockList: Investiments[] = MOCK_LIST;

describe('ListComponent', () => {
  let component: ListComponent;
  let service: ListInvestimentsService;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [HttpClientModule],
      providers: [ListInvestimentsService],
    });

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ListInvestimentsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) Deve listar os investimentos', () => {
    spyOn(service, 'index').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();

    expect(service.index).toHaveBeenCalledWith();
    expect(component.investiments.length).toEqual(5);
    expect(component.investiments[0].name).toEqual('Banco 1');
    expect(component.investiments[0].value).toEqual(100);
    expect(component.investiments[4].name).toEqual('Banco 5');
  });

  it('(I) Deve listar os investimentos', () => {
    spyOn(service, 'index').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();

    let investiments =
      fixture.debugElement.nativeElement.querySelectorAll('.list-items');

    expect(investiments.length).toBe(5);
    expect(investiments[0].textContent.trim()).toEqual('Banco 1 | 100');
    expect(investiments[4].textContent.trim()).toEqual('Banco 5 | 100');
  });
});
