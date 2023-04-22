import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class ContextServiceService {

  public questions: BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>([]);
  public answers: BehaviorSubject<Answer[]> = new BehaviorSubject<Answer[]>([]);

  constructor() { }
}
