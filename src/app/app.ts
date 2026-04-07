import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  signal,
  ViewChild,
  viewChild,
  ViewChildren,
} from '@angular/core';
import { COURSES } from './data/db-data';
import { CourseCard } from './course-card/course-card';
import { AccountService } from './services/account';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class AppComponent implements AfterViewInit, OnInit {
  protected readonly title = signal('demo');

  accounts: { name: string; status: string }[] = [];

  // Component reference variable
  @ViewChild(CourseCard) card: CourseCard;

  // Template reference variable
  // @ViewChild('cardTwoRef') cardTwoRef: CourseCard;
  @ViewChild('cardTwoRef', { read: ElementRef }) cardTwoRef: ElementRef; // Read as Html element not component

  // Template reference variable
  @ViewChild('containerRef') containerRef: ElementRef;

  @ViewChildren(CourseCard) cards: QueryList<CourseCard>;
  @ViewChildren('containerFor') containerFor: QueryList<ElementRef>;

  courses = COURSES;

  @Input() coreCourses = COURSES[0];
  @Input() rxjsCourse = COURSES[1];
  @Input() ngrxCourse = COURSES[2];

  //
  constructor(private accountService: AccountService) {
    console.log('constructor', this.card);
  }
  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.card);
  }

  onCourseSelected(course: any) {
    console.log('card clicked');
    console.log(course);
    console.log('Component reference variable', this.card);
    console.log('Template reference variable', this.cardTwoRef);
    console.log('Template reference variable container', this.containerRef);
    console.log('All cards', this.cards);
    console.log('All containerFor', this.containerFor);
  }

  onTrackCourse(index: number, course: any) {
    return course.id;
  }

  onToggleHighlight(isHighlighted: boolean) {
    console.log('isHighlighted', isHighlighted);
  }

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

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
  onBlueprintAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
}
