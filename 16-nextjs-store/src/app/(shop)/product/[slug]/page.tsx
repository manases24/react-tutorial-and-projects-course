import { products } from "@/seed/seed";
import { fetchSingleProduct } from "@/utils/actions";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductSlugPage({ params }: Props) {
  const { slug } = params;
  // const product = await fetchSingleProduct(slug);
  const product = products.find((product) => product.slug === slug);
  return (
    <div>
      <h1>Slug: {product?.slug}</h1>
    </div>
  );
}
