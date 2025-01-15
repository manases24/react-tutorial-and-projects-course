import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl">HomePage</h1>
      <Button className="capitalize m-8" variant="outline" size="lg" asChild>
        <Link href="/reviews">Click me</Link>
      </Button>
    </>
  );
}
