import { Dispatch } from "react";
import { Action, QuestionType } from "../types";
import { Options } from "./Options";

interface Props {
  question: QuestionType;
  answer: number | null
  dispatch: Dispatch<Action>;
}


export const Question = ({ question, answer, dispatch }: Props) => {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} answer={answer} dispatch={dispatch}/>
    </div>
  );
};
