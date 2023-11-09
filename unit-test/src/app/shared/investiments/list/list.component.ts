import { ListInvestimentsService } from './../services/list-investiments.service';
import { Component, OnInit } from '@angular/core';
import { Investiments } from '../model/investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public investiments!: Investiments[];

  constructor(private listInvestimentsService: ListInvestimentsService) {}

  ngOnInit() {
    this.listInvestimentsService
      .index()
      .subscribe((response) => (this.investiments = response));
  }
}
