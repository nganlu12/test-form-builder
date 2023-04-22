import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { QuestionType } from "../utils/enum";


export interface AnswerForm {
  answers: FormArray<FormGroup<QuestionAnswer>>;
}

export interface QuestionAnswer {
  questionType: FormControl<QuestionType>;
  selectedOptions: FormArray<FormControl<boolean>>;
  textAnswer: FormControl<string>;
}