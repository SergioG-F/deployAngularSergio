import { Component, OnChanges, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { HolaService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HolaService],
})
export class HomeComponent implements OnInit, OnChanges {
  constructor(private coursesService: CoursesService) {
    console.log('desde constructor');
  }

  ngOnChanges(): void {
    console.log('desde ngOnChanges');
  }

  ngOnInit(): void {
    console.log(this.coursesService.courses, 'desde ngOnInit');
  }
}
