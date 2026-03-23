import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-core',
  standalone: false,
  templateUrl: './core.html',
  styleUrls: ['./core.scss'],
})
export class Core {
  @Output() serverCreated = new EventEmitter<{ serverName: string; serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string; serverContent: string }>();
  @ViewChild('serverContentInput', { static: true }) severContentInput: ElementRef;

  newServerName = '';
  newServerContent = '';

  onServerAdded(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.severContentInput.nativeElement.value,
    });
  }
  onBlueprintAdded(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.severContentInput.nativeElement.value,
    });
  }
}
