import { Navigate, useNavigate, useParams } from "react-router-dom";
import { FiSkipBack } from "react-icons/fi";
import { IssueComment } from "../components/IssueComment";
import { useIssue } from "../hooks/useIssue";
import { LoadingSpinner } from "../../shared/components/LoadingSpinner";

export const IssueView = () => {
  const navigate = useNavigate();
  const params = useParams();

  const issueNumber = Number(params.issueNumber ?? 0);
  const { issueQuery, commentsQuery } = useIssue(issueNumber);

  if (issueQuery.isLoading) {
    return <div>Loading issue...</div>;
  }

  if (!issueQuery.data) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="mb-5">
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="hover:underline text-blue-400 flex items-center"
        >
          <FiSkipBack />
          Regresar
        </button>
      </div>

      {/* Primer comentario */}
      <IssueComment issue={issueQuery.data} />

      {/* TODO: */}

      {commentsQuery.isLoading ? (
        <LoadingSpinner />
      ) : (
        commentsQuery.data?.map((comment) => (
          <IssueComment key={comment.id} issue={comment} />
        ))
      )}

      {/* Comentario de otros */}
      {/* <IssueComment body={comment2} />
      <IssueComment body={comment3} /> */}
    </div>
  );
};
