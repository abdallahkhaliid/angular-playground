import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../interfaces/course';

@Component({
  selector: 'app-course-card',
  standalone: false,
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss',
})
export class CourseCard {
  // Optional Input Property
  // @Input() course: ICourse;

  // Required Input Property
  @Input({ required: true }) course: ICourse;
  @Output() courseSelected = new EventEmitter<ICourse>();

  onViewCourse() {
    console.log(this.course.description);
    this.courseSelected.emit(this.course);
  }
}
