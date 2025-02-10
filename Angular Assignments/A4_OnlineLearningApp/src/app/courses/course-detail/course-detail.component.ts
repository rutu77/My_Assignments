import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl:'./course-detail.component.css',
  standalone:false
})
export class CourseDetailComponent implements OnInit {
  courseId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));
  }
}