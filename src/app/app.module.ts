import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { AboutComponent } from './pages/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CourseComponent } from './pages/courses/course/course.component';
import { NosotrosModule } from './pages/nosotros/nosotros.module';
import { AppService } from './app.service';
import { TextReducerPipe } from './pipes/text-reducer.pipe';
import { ChangeColorDirective } from './directives/change-color.directive';
import { NoIfDirective } from './directives/no-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    AboutComponent,
    CourseComponent,
    TextReducerPipe,
    ChangeColorDirective,
    NoIfDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    NosotrosModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
