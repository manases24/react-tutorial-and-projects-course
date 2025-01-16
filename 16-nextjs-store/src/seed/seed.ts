import { PrismaClient } from "@prisma/client";
import { products } from "./products";

const prisma = new PrismaClient();

console.log("Seed init...");

async function main() {
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("Seed execution...");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
