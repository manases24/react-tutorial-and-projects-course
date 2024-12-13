import { githubApi } from "../../api/github.api";
import { sleep } from "../../helpers/sleep";
import { GithubIssue } from "../interfaces/issue.interface";

export const getIssue = async (issueNumber: number): Promise<GithubIssue> => {
  await sleep(1500);
  const { data } = await githubApi.get<GithubIssue>(`/issues/${issueNumber}`);
  return data;
};
