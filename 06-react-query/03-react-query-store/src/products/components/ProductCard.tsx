import { Card, Image } from "@nextui-org/react";
import { type Product } from "..";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
  fullDescription?: boolean;
  prefetchProduct?: (id: number) => void;
}

export const ProductCard = ({
  product,
  fullDescription = false,
  prefetchProduct,
}: Props) => {
  return (
    <Link
      to={`/product/${product.id}`}
      onMouseEnter={() => prefetchProduct && prefetchProduct(product.id)}
    >
      <Card className="grid grid-rows-[auto_1fr_auto] p-4 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 bg-white border border-gray-200 max-w-sm mx-auto">
        {/* Imagen con efecto hover */}
        <div className="overflow-hidden rounded-lg">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="transform hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-col space-y-2 mt-4">
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
            {product.category}
          </p>
          <h3 className="font-bold text-gray-800 text-lg line-clamp-2">
            {product.title}
          </h3>
          <p className="text-gray-600 text-sm leading-snug">
            {fullDescription
              ? product.description
              : product.description.slice(0, 60) + "..."}
          </p>
        </div>

        {/* Precio */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-bold text-indigo-600">
            ${product.price}
            <span className="text-gray-400 text-sm font-normal">
              {" "}
              + impuesto
            </span>
          </p>
        </div>
      </Card>
    </Link>
  );
};
