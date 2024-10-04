import { Injectable, OnInit } from '@angular/core';
import { learnigData } from '../data/learnig-data';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class LearningService {
  private learnig:Course = learnigData;
  constructor() { }

  getLearning():Course{
    return this.learnig;
  }
}

