import { Dispatch } from "react";
import { Action } from "../types";

interface Props {
  index: number;
  numQuestions: number;
  dispatch: Dispatch<Action>;
  hasAnswer: boolean; // Nueva propiedad para asegurarnos de que el botón funcione solo cuando haya respuesta
}

export const NextButton = ({ index, numQuestions, dispatch, hasAnswer }: Props) => {
  const isLastQuestion = index === numQuestions - 1;

  return (
    <button
      className="btn btn-ui"
      onClick={() =>
        hasAnswer
          ? dispatch({ type: isLastQuestion ? "finish" : "nextQuestion" })
          : null // Evitar hacer nada si no hay respuesta
      }
      disabled={!hasAnswer} // Deshabilitar si no se ha respondido
    >
      {isLastQuestion ? "Finish" : "Next"}
    </button>
  );
};
