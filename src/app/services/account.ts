import { Injectable } from '@angular/core';
import { LoggingService } from './logging';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  accounts = [
    { name: 'test', status: 'active' },
    { name: 'test2', status: 'inactive' },
    { name: 'test3', status: 'hidden' },
  ];

  constructor(private loggingService: LoggingService) {}

  addAcount(accountData: { name: string; status: string }) {
    this.accounts.push({
      name: accountData.name,
      status: accountData.status,
    });
    this.loggingService.logStatusChange(accountData.status);
  }

  updateAccount(statusData: { id: number; status: string }) {
    this.accounts[statusData.id].status = statusData.status;
    this.loggingService.logStatusChange(statusData.status);
  }
}
