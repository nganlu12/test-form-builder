import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { QuestionBuilderForm } from 'src/app/models/question-form.model';
import { QuestionType } from 'src/app/utils/enum';

@Component({
  selector: 'app-add-question-popup',
  templateUrl: './add-question-popup.component.html',
  styleUrls: ['./add-question-popup.component.scss']
})
export class AddQuestionPopupComponent implements OnInit {
  public QUESTION_TYPE = QuestionType;
  public MAX_ANSWER_OPTION = 5;
  public questionForm: FormGroup<QuestionBuilderForm> = new FormGroup({} as QuestionBuilderForm);

  constructor(
    public dialogRef: MatDialogRef<AddQuestionPopupComponent>,
    private _formBuilder: NonNullableFormBuilder
  ) {
    this._initForm();
  }

  ngOnInit(): void {
  }

  public get questionType() {
    return (this.questionForm.controls["type"] as FormControl).value;
  }

  public get answerOptions() {
    return this.questionForm.controls["answerOptions"] as FormArray;
  }

  public addAnswerOption(): void {
    this.answerOptions.push(new FormControl());
  }

  private _initForm(): void {
    this.questionForm = this._formBuilder.group({
      type: [this.QUESTION_TYPE.Paragraph, [Validators.required]],
      title: ['', [Validators.required]],
      answerOptions: this._formBuilder.array<string>([]),
      isAllowOther: [false],
      isRequired: [false]
    });
  }

  public onCancel(): void {
    this.dialogRef.close();
  }
}
