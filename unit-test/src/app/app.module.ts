import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BankingComponent } from './shared/banking/banking.component';
import { ListComponent } from './shared/investiments/list/list.component';
import { ListInvestimentsService } from './shared/investiments/services/list-investiments.service';

@NgModule({
  declarations: [AppComponent, BankingComponent, ListComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
