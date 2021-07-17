import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  @Input() sessionNumber: number;

  constructor() {
    this.sessionNumber = 0;
  }

  ngOnInit(): void {}
}
