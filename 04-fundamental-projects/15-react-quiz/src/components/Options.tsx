import { Dispatch } from "react";
import { Action, QuestionType } from "../types";

interface Props {
  question: QuestionType;
  answer: number | null;
  dispatch: Dispatch<Action>;
}

export const Options = ({ question, answer, dispatch }: Props) => {
  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswer
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={answer !== null}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
