import { QuestionType } from "../utils/enum";

export interface Answer {
  questionId: number;
  questionType: QuestionType;
  selectedOption: number[];
  textAnswer: string;
}