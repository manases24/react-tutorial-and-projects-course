import { useState } from "react";
import { LoadingSpinner } from "../../shared/components/LoadingSpinner";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import { useIssues } from "../hooks/useIssues";
import { State } from "../interfaces/issue.interface";

export const ListView = () => {
  const [state, setState] = useState<State>(State.All);
  const [selectedLabels, setselectedLabels] = useState<string[]>([]);

  const { issuesQuery, page, nextPage, prevPage } = useIssues({
    state: state,
    selectedLabels: selectedLabels,
  });
  const issues = issuesQuery.data ?? [];

  const onLabelSelected = (label: string) => {
    if (selectedLabels.includes(label)) {
      setselectedLabels(selectedLabels.filter((l) => l !== label));
    } else {
      setselectedLabels([...selectedLabels, label]);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        {issuesQuery.isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <IssueList
              issues={issues}
              onStateChange={(s) => setState(s)}
              state={state}
            />

            <div className="flex justify-between items-center">
           
              <button
                className="p-2 bg-blue-500 rounded-md hover:bg-blue-700 translate-x-0"
                onClick={prevPage}
              >
                Anteriores
              </button>
              <span>{page}</span>
              <button
                className="p-2 bg-blue-500 rounded-md hover:bg-blue-700 translate-x-0"
                onClick={nextPage}
              >
                Siguientes
              </button>
            </div>
          </>
        )}
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker
          onLabelSelected={onLabelSelected}
          selectedLabels={selectedLabels}
        />
      </div>
    </div>
  );
};
