import { QuestionType } from "../utils/enum";

export interface Answer {
  questionId: number;
  questionType: QuestionType;
  selectedOptions: number[];
  textAnswer: string;
}