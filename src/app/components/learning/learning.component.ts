import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { LearningService } from '../../services/learning.service';
import { CompanyViewComponent } from "../company-view/company-view.component";
import { TableStudentsComponent } from "../table-students/table-students.component";

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CompanyViewComponent, TableStudentsComponent],
  templateUrl: './learning.component.html',
})
export class LearningComponent implements OnInit{
  learning!:Course;
  constructor(private service:LearningService){}
ngOnInit(): void {
  this.learning=this.service.getLearning();
}
}
