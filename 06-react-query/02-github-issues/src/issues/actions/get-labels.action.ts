import { githubApi } from "../../api/github.api";
import { GithubLabel } from "../interfaces/label.interface";

export const getLabels = async (): Promise<GithubLabel[]> => {
  const { data } = await githubApi.get<GithubLabel[]>("/labels");
  return data;
};
