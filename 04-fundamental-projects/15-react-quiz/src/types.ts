export type QuestionType = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

export type State = {
  questions: QuestionType[];
  status: "loading" | "ready" | "active" | "error";
  index: number;
  answer: number | null;
  points: number;
};

export type Action =
  | { type: "start"; payload: QuestionType[] }
  | { type: "newAnswer"; payload: number }
  | { type: "dataReceived"; payload: QuestionType[] }
  | { type: "dataFailed" };
