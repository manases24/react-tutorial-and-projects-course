import { FinishScreen } from "./components/FinishScreen";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { Main } from "./components/Main";
import { NextButton } from "./components/NextButton";
import { Progress } from "./components/Progress";
import { Question } from "./components/Question";
import { StartScreen } from "./components/StartScreen";
import { Timer } from "./components/Timer";
import { Error } from "./components/Error";
import { useQuiz } from "./context/QuizContext";

function App() {
  const {
    status,
    numQuestions,
    index,
    answer,
    points,
    questions,
    maxPossiblePoints,
    dispatch,
    secondsRemaining,
  } = useQuiz();

  const hasAnswer = answer !== null;

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              answer={answer}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <NextButton
                index={index}
                numQuestions={numQuestions}
                dispatch={dispatch}
                hasAnswer={hasAnswer} // Define si hay respuesta o no
              />
              {secondsRemaining !== null && (
                <Timer
                  secondsRemaining={secondsRemaining}
                  dispatch={dispatch}
                />
              )}
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            totalQuestions={numQuestions}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
