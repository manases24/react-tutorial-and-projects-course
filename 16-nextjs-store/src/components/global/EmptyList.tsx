import { cn } from "@/lib/utils";

interface Props {
  heading?: string;
  className?: string;
}

export const EmptyList = ({ heading = "No items found", className }: Props) => {
  return <h2 className={cn("text-xl", className)}>{heading}</h2>;
};
