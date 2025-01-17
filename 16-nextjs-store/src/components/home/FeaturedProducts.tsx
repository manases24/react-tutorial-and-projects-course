import { fetchFeaturedProducts } from "@/utils/actions";
import { EmptyList } from "@/components/global/EmptyList";
import { SectionTitle } from "@/components/global/SectionTitle";
import { ProductsGrid } from "@/components/products/ProductsGrid";

export const FeaturedProducts = async () => {
  const products = await fetchFeaturedProducts();

  if (products.length === 0) return <EmptyList />;
  return (
    <section className="pt-24">
      <SectionTitle text="productos destacados" />
      <ProductsGrid products={products} />
    </section>
  );
};
