import { type Product, ProductCard, usePrefetchProduct } from "..";

interface Props {
  products: Product[];
}

export const ProductList = ({ products }: Props) => {
  const prefetchProduct = usePrefetchProduct();

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto max-w-7xl px-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          prefetchProduct={prefetchProduct}
        />
      ))}
    </div>
  );
};
