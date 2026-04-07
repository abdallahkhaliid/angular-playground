import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../services/logging';
import { AccountService } from '../services/account';

@Component({
  selector: 'app-new-account',
  standalone: false,
  templateUrl: './new-account.html',
  styleUrl: './new-account.scss',
})
export class NewAccountComponent {
  // NOT USING THIS ANYMORE beacuse of services
  // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  // dependency injection
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService,
  ) {}

  onAddAccount(name: string, status: string) {
    // this.accountAdded.emit({ name, status });
    // console.log('New account added: ' + name + ' with status: ' + status);

    // using service
    this.accountService.addAcount({ name, status });
    this.loggingService.logStatusChange(status);
  }
}
