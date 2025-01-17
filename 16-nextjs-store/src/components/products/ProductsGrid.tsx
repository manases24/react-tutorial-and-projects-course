import Link from "next/link";
import Image from "next/image";
import { Product } from "@prisma/client";
import { formatCurrency } from "@/utils/format";
import { Card, CardContent } from "@/components/ui/card";
import { FavoriteToggleButton } from "./FavoriteToggleButton";

interface Props {
  products: Product[];
}

export const ProductsGrid = ({ products }: Props) => {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map(({ id, name, price, image, slug }) => {
        const dollarsAmount = formatCurrency(price);

        return (
          <article key={slug} className="group relative">
           
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-4">
                  {/* <div className="relative h-64 md:h-48 rounded overflow-hidden ">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw "
                      priority
                      className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div> */}
                  <div className="relative w-full h-64 md:h-48">
  <Image
    src={image}
    alt={name}
    layout="fill" // Cambia "fill" por "layout" y asegura el tamaño
    objectFit="contain" // Esto reemplaza "object-cover" para mantener proporciones originales
    priority
    className="rounded transform group-hover:scale-110 transition-transform duration-500"
  />
</div>

                  <div className="mt-4 text-center">
                  <Link href={`/product/${slug}`}>
                    <h2 className="text-lg capitalize hover:text-blue-600">
                      {name}
                    </h2>
                    </Link>
                    <p className="text-muted-foreground mt-2">
                      {dollarsAmount}
                    </p>
                  </div>
                </CardContent>
              </Card>
          
            <div className="absolute top-7 right-7 z-5">
              <FavoriteToggleButton productId={id} />
            </div>
            <div className="p-4 flex flex-col"></div>
          </article>
        );
      })}
    </div>
  );
};
