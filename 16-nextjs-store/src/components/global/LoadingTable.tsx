import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  rows?: number;
}

export const LoadingTable = ({ rows = 5 }: Props) => {
  const tableRows = Array.from({ length: rows }, (_, index) => {
    return (
      <div className="mb-4" key={index}>
        <Skeleton className="w-full h-8 rounded" />
      </div>
    );
  });
  return <>{tableRows}</>;
};
