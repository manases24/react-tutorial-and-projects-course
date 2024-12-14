import { GithubIssue, State } from "../interfaces/issue.interface";
import { IssueItem } from "./IssueItem";

interface Props {
  issues: GithubIssue[];
  state: State;
  onStateChange: (state: State) => void;
}

export const IssueList = ({ issues, state, onStateChange }: Props) => {
  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button
          className={`btn  ${state === State.All ? "active" : ""}`}
          onClick={() => onStateChange(State.All)}
        >
          All
        </button>
        <button
          className={`btn  ${state === State.Open ? "active" : ""}`}
          onClick={() => onStateChange(State.Open)}
        >
          Open
        </button>
        <button
          className={`btn  ${state === State.Close ? "active" : ""}`}
          onClick={() => onStateChange(State.Close)}
        >
          Closed
        </button>
      </div>

      {/* Lista de issues */}
      <div className="mt-4">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  );
};
