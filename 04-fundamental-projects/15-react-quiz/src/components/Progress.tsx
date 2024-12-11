interface Props {
  index: number;
  numQuestions: number;
  answer: number | null;
  points: number;
  maxPossiblePoints: number;
}

export const Progress = ({
  index,
  numQuestions,
  answer,
  points,
  maxPossiblePoints,
}: Props) => {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};
