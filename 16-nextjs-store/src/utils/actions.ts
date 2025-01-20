"use server";

import { redirect } from "next/navigation";
import prisma from "./prisma";

interface AllProductsProps {
  search?: string;
}

export const fetchFeaturedProducts = async () => {
  const products = await prisma.product.findMany({ where: { featured: true } });
  return products;
};

export const fetchAllProducts = async ({ search = "" }: AllProductsProps) => {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: { createdAt: "desc" },
  });

  return products;
};

export const fetchSingleSlugProduct = async (slug: string) => {
  const product = await prisma.product.findUnique({
    where: {
      slug: slug,
    },
  });
  if (!product) {
    redirect("/product");
  }
  return product;
};

// export const fetchFavoriteId = async ({ productId }: { productId: string }) => {
//   const user = await getAuthUser();
//   const favorite = await prisma.favorite.findFirst({
//     where: {
//       productId,
//       clerkId: user.id,
//     },
//     select: {
//       id: true,
//     },
//   });
//   return favorite?.id || null;
// };
