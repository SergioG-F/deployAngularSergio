import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { HolaService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HolaService],
})
export class HomeComponent implements OnInit {
  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    console.log(this.coursesService.courses);
  }
}
