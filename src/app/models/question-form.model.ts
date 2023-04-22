import { FormArray, FormControl } from "@angular/forms";
import { QuestionType } from "../utils/enum";

export interface QuestionBuilderForm {
  type: FormControl<QuestionType>;
  title: FormControl<string>;
  answerOptions: FormArray<FormControl<string>>;
  isAllowOther: FormControl<boolean>;
  isRequired: FormControl<boolean>;
}