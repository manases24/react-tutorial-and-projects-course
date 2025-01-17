import Image from "next/image";
import { fetchSingleSlugProduct } from "@/utils/actions";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductSlugPage({ params }: Props) {
  const { slug } = params;
  const product = await fetchSingleSlugProduct(slug);
  const { name, image, company, description, price } = product;

  return (
    <section>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <div className="relative h-full">
         
         
        </div>
        <h1>Slug: {slug}</h1>
      </div>
    </section>
  );
}
