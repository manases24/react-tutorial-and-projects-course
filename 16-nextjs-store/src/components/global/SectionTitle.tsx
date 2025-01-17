import { Separator } from "@/components/ui/separator";

interface Props {
  text: string;
}

export const SectionTitle = ({ text }: Props) => {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-8">
        {text}
      </h2>
      <Separator />
    </div>
  );
};
