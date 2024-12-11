import { SECS_PER_QUESTION } from "../context/QuizContext";
import { Action, QuestionType, State } from "../types";

export const initialState: State = {
  questions: [] as QuestionType[],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: 600,
};

export const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "start":
      return {
        ...state,
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
        status: "active",
      };
    case "newAnswer":
      if (!state.questions.length) return state;
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null }; // Limpiar respuesta para la siguiente pregunta
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining:
          state.secondsRemaining! > 0 ? state.secondsRemaining! - 1 : 0, // Evitar valores negativos
      };
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    default:
      return state;
  }
};
