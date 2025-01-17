import { Suspense } from "react";
import { FeaturedProducts, Hero, LoadingContainer } from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
}
