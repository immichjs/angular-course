import { Investiments } from './../model/investiments';
import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ListInvestimentsService } from './list-investiments.service';
import { MOCK_LIST } from './list-investiments.mock';

describe('ListInvestimentsService', () => {
  let service: ListInvestimentsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  const URL: string =
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';
  const mockList: Investiments[] = MOCK_LIST;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ListInvestimentsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('(U) Deve listar todos os investimentos', (done) => {
    service.index().subscribe((response: Investiments[]) => {
      expect(response[0].name).toEqual('Banco 1');
      expect(response[0].value).toEqual(100);
      expect(response[4].name).toEqual('Banco 5');
      expect(response[4].value).toEqual(100);

      done();
    });

    const request = httpTestingController.expectOne(URL);
    request.flush(mockList);

    expect(request.request.method).toEqual('GET');
  });
});
