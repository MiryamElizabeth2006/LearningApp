import { Component, Input } from '@angular/core';
import { Student } from '../../model/student';
import { StudentItemComponent } from "../student-item/student-item.component";

@Component({
  selector: 'table-students',
  standalone: true,
  imports: [StudentItemComponent],
  templateUrl: './table-students.component.html',
})
export class TableStudentsComponent {
@Input()student!:Student[];
}
