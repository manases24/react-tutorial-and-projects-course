export type QuestionType = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

export type State = {
  questions: QuestionType[];
  status: "loading" | "ready" | "active" | "error" | "finished";
  index: number;
  answer: number | null;
  points: number;
};

export type Action =
  | { type: "start" }
  | { type: "newAnswer"; payload: number }
  | { type: "nextQuestion" }
  | { type: "finish" }
  | { type: "restart" }
  | { type: "dataReceived"; payload: QuestionType[] }
  | { type: "dataFailed" };
