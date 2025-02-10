import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl:'./courses.component.css',
  standalone:false
})
export class CoursesComponent {
  courses = [
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' }
  ];
}