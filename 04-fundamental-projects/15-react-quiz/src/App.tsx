import { useEffect, useReducer } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Loader } from "./components/Loader";
import { Error } from "./components/Error";
import { StartScreen } from "./components/StartScreen";
import { Question } from "./components/Question";
import { Action, State } from "./types";
import { NextButton } from "./components/NextButton";
import { FinishScreen } from "./components/FinishScreen";
import { Progress } from "./components/Progress";
import { Footer } from "./components/Footer";
import { Timer } from "./components/Timer";

const initialState: State = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: 600,
};

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "start":
      return { ...state, status: "active" };
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
      return { ...initialState, status: "loading" };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const numQuestions = state.questions.length;
  const hasAnswer = state.answer !== null; // Verificar si el usuario ya respondió

  const maxPossiblePoints = state.questions.reduce(
    (total, question) => total + question.points,
    0
  );

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {state.status === "loading" && <Loader />}
        {state.status === "error" && <Error />}
        {state.status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {state.status === "active" && (
          <>
            <Progress
              index={state.index}
              numQuestions={numQuestions}
              answer={state.answer}
              points={state.points}
              maxPossiblePoints={maxPossiblePoints}
            />

            <Question
              question={state.questions[state.index]}
              dispatch={dispatch}
              answer={state.answer}
            />
            <Footer>
              <NextButton
                index={state.index}
                numQuestions={numQuestions}
                dispatch={dispatch}
                hasAnswer={hasAnswer} // Pasar el estado de si se respondió o no
              />
              {state.status === "active" && state.secondsRemaining !== null && (
                <Timer
                  secondsRemaining={state.secondsRemaining}
                  dispatch={dispatch}
                />
              )}
            </Footer>
          </>
        )}
        {state.status === "finished" && (
          <FinishScreen
            points={state.points}
            totalQuestions={numQuestions}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
