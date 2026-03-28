import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ICourse } from '../interfaces/course';
import { CourseImage } from '../course-image/course-image';

@Component({
  selector: 'app-course-card',
  standalone: false,
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss',
})
export class CourseCard implements AfterViewInit, AfterContentInit {
  // Optional Input Property
  // @Input() course: ICourse;

  // Required Input Property
  @Input({ required: true }) course: ICourse;
  @Output() courseSelected = new EventEmitter<ICourse>();

  @ContentChild('imgRef') imgRef: ElementRef;
  @ContentChild(CourseImage) courseImage: CourseImage;
  @ContentChildren(CourseImage) courseImages: QueryList<CourseImage>;

  @Input() blankImage: TemplateRef<any>;

  onViewCourse() {
    console.log(this.course.description);
    this.courseSelected.emit(this.course);
  }

  ngAfterViewInit(): void {
    console.log('imgRefViewChild', this.imgRef);
  }

  ngAfterContentInit(): void {
    console.log('courseImage', this.courseImage);
    console.log('courseImages', this.courseImages);
  }
}
