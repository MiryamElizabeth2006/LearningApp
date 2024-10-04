import { Component, Input } from '@angular/core';
import { LearningComponent } from '../learning/learning.component';
import { Course } from '../../model/course';

@Component({
  selector: 'company-view',
  standalone: true,
  imports: [],
  templateUrl: './company-view.component.html',
})
export class CompanyViewComponent {
 @Input()course!:Course;
}
