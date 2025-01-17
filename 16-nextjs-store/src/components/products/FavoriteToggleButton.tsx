import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface Props {
  productId: string;
}

export const FavoriteToggleButton = ({ productId }: Props) => {
  return (
    <Button className="p-2 cursor-pointer" size="icon" variant="outline">
      <FaHeart />
    </Button>
  );
};
