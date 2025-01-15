import Link from "next/link";
import { DiYahooSmall } from "react-icons/di";
import { Button } from "../ui/button";

export const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <DiYahooSmall className="w-6 h-6" />
      </Link>
    </Button>
  );
};
