import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer.model';
import { Question } from 'src/app/models/question.model';
import { ContextServiceService } from 'src/app/services/context-service.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  public questions: Question[] = [];
  public answers: Answer[] = [];

  constructor(
    private _contextServiceService: ContextServiceService
  ) { }

  ngOnInit(): void {
    this._contextServiceService.answers.subscribe((data) => {
      this.answers = data;
    });
    this._contextServiceService.questions.subscribe((data) => {
      this.questions = data;
    });
  }

  public getAnswerById(questionId: number): string {
    const answer = this.answers.find(answer => answer.questionId === questionId);
    return `${answer?.selectedOptions} ${answer?.textAnswer}`;
  }

}
