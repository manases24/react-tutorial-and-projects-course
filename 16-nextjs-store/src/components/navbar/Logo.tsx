import Link from "next/link";
import { DiJsBadge } from "react-icons/di";
import { Button } from "../ui/button";

export const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <DiJsBadge  className="w-6 h-6" />
      </Link>
    </Button>
  );
};
