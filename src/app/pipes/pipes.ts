import { Component } from '@angular/core';

export interface DemoServer {
  instanceType: string;
  name: string;
  status: 'stable' | 'offline' | 'critical';
  started: Date;
  cost: number;
  load: number;
  uptime: number;
}

@Component({
  selector: 'app-pipes',
  standalone: false,
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})
export class Pipes {
  filteredStatus = '';

  // Built-in pipes playground values
  demoText = 'hello angular pipes DEMO';
  price = 2499.5;
  bigNumber = 1234567.8912;
  discount = 0.2567;

  appStatus: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve('stable'), 2000);
  });

  servers: DemoServer[] = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(2018, 0, 15),
      cost: 2499.5,
      load: 1234.5678,
      uptime: 0.9987,
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(2019, 0, 15),
      cost: 4999,
      load: 98765.4321,
      uptime: 0.9995,
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(2020, 0, 15),
      cost: 499.99,
      load: 12.345,
      uptime: 0.7543,
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'critical',
      started: new Date(2022, 0, 15),
      cost: 899.49,
      load: 456.789,
      uptime: 0.3218,
    },
  ];

  getStatusClasses(server: DemoServer) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical',
    };
  }

  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'New Server',
      status: 'stable',
      started: new Date(),
      cost: 199.99,
      load: 7.8912,
      uptime: 1,
    });
  }
}
