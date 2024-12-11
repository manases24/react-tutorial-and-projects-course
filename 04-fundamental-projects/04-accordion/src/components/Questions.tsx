import { SingleQuestion } from "./SingleQuestion";
import { QuestionType } from "../api";

interface Props {
  questions: QuestionType[];
}

export const Questions = ({ questions }: Props) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} item={question} />;
      })}
    </section>
  );
};
