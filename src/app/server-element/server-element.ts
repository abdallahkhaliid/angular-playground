import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-server-element',
  standalone: false,
  templateUrl: './server-element.html',
  styleUrl: './server-element.scss',
})
export class ServerElement {
  @Input() element: { type: string; name: string; content: string } = {
    type: '',
    name: '',
    content: '',
  };

  constructor() {
    console.log('constructor', this.element);
  }

  // called After the constructor and after the @Input properties are initialized
  ngOnInit(): void {
    console.log('ngOnInit', this.element);
  }

  ngOnChanges(changes: SimpleChange): void {
    console.log('ngOnChanges', changes);
  }
}
