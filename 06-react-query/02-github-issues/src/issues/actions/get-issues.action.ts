import { githubApi } from "../../api/github.api";
import { sleep } from "../../helpers/sleep";
import { GithubIssue, State } from "../interfaces/issue.interface";

interface Props {
  state: State;
}

export const getIssues = async ({ state }: Props): Promise<GithubIssue[]> => {
  await sleep(1500);
  const params = new URLSearchParams();
  if (state !== State.All) {
    params.append("state", state);
  }
  const { data } = await githubApi.get<GithubIssue[]>("/issues", { params });
  return data;
};
