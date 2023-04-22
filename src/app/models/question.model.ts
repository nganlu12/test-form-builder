import { QuestionType } from "../utils/enum";

export interface Question {
  type: QuestionType;
  title: string;
  answerOptions: string[];
  isAllowOther: boolean;
  isRequired: boolean;
}