import { Injectable, OnInit } from '@angular/core';
import { Investiments } from '../model/investiments';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListInvestimentsService {
  private url: string =
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';

  constructor(private http: HttpClient) {}

  public index(): Observable<Investiments[]> {
    return this.http
      .get<Investiments[]>(this.url)
      .pipe(map((response) => response));
  }
}
