import { Component, Input, signal } from '@angular/core';
import { COURSES } from './data/db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('demo');
  courses = COURSES;

  @Input() coreCourses = COURSES[0];
  @Input() rxjsCourse = COURSES[1];
  @Input() ngrxCourse = COURSES[2];

  onCourseSelected(course: any) {
    console.log('card clicked');
    console.log(course);
  }

  // serverElements: any = [{ type: 'server', name: 'test', content: 'this a test server' }]; // Intialzie with one element

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

  // onServerAdded(severData: { serverName: string; serverContent: string }) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: severData.serverName,
  //     content: severData.serverContent,
  //   });
  // }
  // onBlueprintAdded(severData: { serverName: string; serverContent: string }) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: severData.serverName,
  //     content: severData.serverContent,
  //   });
  // }
}
