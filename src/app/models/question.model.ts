import { QuestionType } from "../utils/enum";

export interface Question {
  id: number;
  type: QuestionType;
  title: string;
  answerOptions: string[];
  isAllowOther: boolean;
  isRequired: boolean;
}