import { Dispatch, useEffect } from "react";
import { Action } from "../types";

interface Props {
  secondsRemaining: number;

  dispatch: Dispatch<Action>;
}

export const Timer = ({ secondsRemaining, dispatch }: Props) => {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    if (secondsRemaining <= 0) return;
  
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
  
    return () => clearInterval(id);
  }, [secondsRemaining, dispatch]);
  

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
};
