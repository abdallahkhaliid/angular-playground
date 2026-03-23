import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('demo');

  serverElements: any = [{ type: 'server', name: 'test', content: 'this a test server' }]; // Intialzie with one element

  // TODO: Moved to Core Module
  // newServerName: string = '';
  // newServerContnet: string = '';

  // onServerAdded() {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: this.newServerName,
  //     content: this.newServerContnet,
  //   });
  // }
  // onBlueprintAdded() {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: this.newServerName,
  //     content: this.newServerContnet,
  //   });
  // }

  onServerAdded(severData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: severData.serverName,
      content: severData.serverContent,
    });
  }
  onBlueprintAdded(severData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: severData.serverName,
      content: severData.serverContent,
    });
  }
}
