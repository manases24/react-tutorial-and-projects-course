import { LoadingSpinner } from "../../shared/components/LoadingSpinner";
import { useLabels } from "../hooks/useLabels";

export const LabelPicker = () => {
  const { labelsQuery } = useLabels();

  if (labelsQuery.isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {labelsQuery.data?.map((label) => {
        return (
          <span
            className="animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer text-white"
            style={{ border: `1px solid #${label.color}` }}
            key={label.id}
          >
            {label.name}
          </span>
        );
      })}
    </div>
  );
};
