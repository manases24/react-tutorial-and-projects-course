import { ProductsContainer } from "@/components/products/ProductsContainer";

interface Props {
  searchParams: { layout?: string; search?: string };
}

export default function ProductsPage({ searchParams }: Props) {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";

  return <ProductsContainer layout={layout} search={search} />;
}
