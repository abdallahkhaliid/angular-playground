import { Component, Input } from '@angular/core';
import { LoggingService } from '../services/logging';
import { AccountService } from '../services/account';

@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.html',
  styleUrl: './account.scss',
})
export class AccountComponent {
  @Input() account: { name: string; status: string } = { name: '', status: '' };
  @Input() id: number;

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService,
  ) {}

  onSetToStatus(status: string) {
    this.accountService.updateAccount({ id: this.id, status: status });
    this.loggingService.logStatusChange(status);
  }
}

