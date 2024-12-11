import { Dispatch } from "react";
import { Action } from "../types";

interface Props {
  points: number;
  totalQuestions: number;
  dispatch: Dispatch<Action>;
}

export const FinishScreen = ({ points, totalQuestions, dispatch }: Props) => {
  const maxPossiblePoints = totalQuestions * 10; // Asumiendo que cada pregunta tiene 10 puntos
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  else if (percentage >= 80 && percentage < 100) emoji = "🎉";
  else if (percentage >= 50 && percentage < 80) emoji = "🙃";
  else if (percentage >= 0 && percentage < 50) emoji = "🤨";
  else if (percentage === 0) emoji = "🤦‍♂️";

  // Suponiendo que el highscore proviene de localStorage
  const highscore = localStorage.getItem("highscore") || "0";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })} 
      >
        Restart quiz
      </button>
    </>
  );
};
