import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-image',
  standalone: false,
  templateUrl: './course-image.html',
  styleUrl: './course-image.scss',
})
export class CourseImage {
  @Input() imageUrl: string;
}
