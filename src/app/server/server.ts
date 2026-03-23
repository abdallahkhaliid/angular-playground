import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  standalone: false,
  templateUrl: './server.html',
  styleUrl: './server.scss',
})
export class Server {
  username = 'Abdallah';
  serverId: number = 20;
  serverStatus: string = 'online';
  allowedRunServer: boolean = false;
  severCreationStatus: string = 'No Server is Created';
  isServerCreated: boolean = false;
  hasSuccessClass: boolean = true;
  hasErrorClass: boolean = false;
  hasSpecialClass: boolean = true;
  serversName = [
    {
      id: 1,
      name: 'server1',
      status: 'online',
    },
    {
      id: 2,
      name: 'server2',
      status: 'offline',
    },
    {
      id: 3,
      name: 'server3',
      status: 'online',
    },
  ];
  serverClasses = {
    success: this.hasSuccessClass,
    error: this.hasErrorClass,
    special: this.hasSpecialClass,
  };

  serverStyles = {
    color: 'blue',
    backgroundColor: 'green',
    fontWeight: 'bold',
  };

  sayHello() {
    window.alert(`Hello ${this.username}`);
  }
  constructor() {
    setTimeout(() => {
      this.allowedRunServer = true;
      console.log('allowedRunServer changed to true');
    }, 3000);
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  onCreateServer() {
    this.serversName.push({
      id: this.serversName.length + 1,
      name: 'server' + (this.serversName.length + 1),
      status: 'online',
    });
    this.isServerCreated = true;
    this.severCreationStatus = 'Server is Created';
  }
}
