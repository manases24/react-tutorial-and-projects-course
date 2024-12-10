export type Question = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

export type State = {
  questions: Question[];
  status: "loading" | "ready" | "active" | "error";
  index: number;
};

export type Action =
  | { type: "start"; payload: Question[] }
  | { type: "dataReceived"; payload: Question[] }
  | { type: "dataFailed" };
