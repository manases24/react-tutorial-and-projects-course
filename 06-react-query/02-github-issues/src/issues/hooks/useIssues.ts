import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions/get-issues.action";
import { State } from "../interfaces/issue.interface";

interface Props {
  state: State;
}

export const useIssues = ({ state }: Props) => {
  const issuesQuery = useQuery({
    queryKey: ["issues", { state }],
    queryFn: () => getIssues({ state }),
    staleTime: 1000 * 60,
  });

  return { issuesQuery };
};
