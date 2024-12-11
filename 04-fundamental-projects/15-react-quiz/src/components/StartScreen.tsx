import { Dispatch } from "react";
import { Action, QuestionType } from "../types";

interface Props {
  numQuestions: number;
  dispatch: Dispatch<Action>;
}

export const StartScreen = ({ numQuestions, dispatch }: Props) => {
  const startQuiz = () => {
    const questions: QuestionType[] = [];
    dispatch({ type: "start", payload: questions });
  };

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={startQuiz}>
        Let's start
      </button>
    </div>
  );
};
