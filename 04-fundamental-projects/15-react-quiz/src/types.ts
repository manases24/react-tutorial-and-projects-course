export type QuestionType = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
  highscore: number;
  secondsRemaining: number | null;
};

export type State = {
  questions: QuestionType[];
  status: "loading" | "ready" | "active" | "error" | "finished";
  index: number;
  answer: number | null;
  points: number;
  highscore: number;
  secondsRemaining: number | null;
};

export type Action =
  | { type: "start" }
  | { type: "newAnswer"; payload: number }
  | { type: "nextQuestion" }
  | { type: "finish" }
  | { type: "tick" }
  | { type: "restart" }
  | { type: "dataReceived"; payload: QuestionType[] }
  | { type: "dataFailed" };
