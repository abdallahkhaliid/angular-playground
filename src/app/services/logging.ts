import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  // on entire application
  providedIn: 'root',
})
export class LoggingService {
  // constructor(private http: HttpClient) {}
  constructor(private http: HttpClient) {}

  logStatusChange(status: string) {
    console.log('New status: ' + status);
  }
}
