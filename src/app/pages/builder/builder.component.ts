import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddQuestionPopupComponent } from './add-question-popup/add-question-popup.component';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { QuestionType } from 'src/app/utils/enum';
import { AnswerForm, QuestionAnswer } from 'src/app/models/answer-form.model';
import { Question } from 'src/app/models/question.model';
import { ContextServiceService } from 'src/app/services/context-service.service';
import { Router } from '@angular/router';
import { Answer } from 'src/app/models/answer.model';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent {
  public QUESTION_TYPE = QuestionType;
  public questions: Question[] = [];
  public answerForm: FormGroup<AnswerForm> = new FormGroup({} as AnswerForm);

  constructor(
    private _dialog: MatDialog,
    private _formBuilder: NonNullableFormBuilder,
    private _contextServiceService: ContextServiceService,
    private _route: Router
  ) {
    this._initAnswerForm();
  }

  public openAddQuestionPopup(): void {
    const dialogRef = this._dialog.open(AddQuestionPopupComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.questions.push({ ...result, ...{ id: this.questions.length + 1 } });
      this._contextServiceService.questions.next(this.questions);
      this.answerForm.controls.answers.push(this._initQuestionAnswerForm(result));
    });
  }

  public openReviewMyAnswer(): void {
    const formValues = (this.answerForm.value.answers ?? []);

    const answers = formValues.map((answer, index) => {
      const selectedOptions = answer.selectedOptions?.map((selected, index) => selected ? index : -1).filter(item => item != -1);
      const result: Answer = {
        questionId: index + 1,
        questionType: answer.questionType as QuestionType,
        selectedOptions: selectedOptions ?? [],
        textAnswer: answer.textAnswer as string
      };
      return result;
    });

    this._contextServiceService.answers.next(answers);
    this._route.navigate(['answer']);
  }

  private _initAnswerForm(): void {
    this.answerForm = this._formBuilder.group({
      answers: this._formBuilder.array<FormGroup<QuestionAnswer>>([])
    });
  }

  private _initQuestionAnswerForm(question: Question): FormGroup<QuestionAnswer> {
    return this._formBuilder.group({
      questionType: [question.type],
      selectedOptions: this._formBuilder.array(question.answerOptions ? question.answerOptions.map(option => false) : []),
      textAnswer: ['']
    });
  }
}
