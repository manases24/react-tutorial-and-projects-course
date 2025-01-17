import { PrismaClient } from "@prisma/client";
import { products } from "./seed";

const prisma = new PrismaClient();

console.log("Seed init...");

async function main() {
  try {
    // Paso 1: Borrar registros previos de las tablas
    console.log("Deleting existing products...");
    await prisma.product.deleteMany();

    // Paso 2: Insertar productos en paralelo
    console.log("Inserting new products...");
    await Promise.all(
      products.map((product) =>
        prisma.product.create({
          data: product,
        })
      )
    );

    console.log("Seed execution completed successfully.");
  } catch (error) {
    console.error("Error during seed execution:", error);
    throw error;
  }
}

// IIFE para encapsular y verificar entorno
(() => {
  if (process.env.NODE_ENV === "production") {
    console.error("Seeding is not allowed in production!");
    return; // Salir temprano si estamos en producción
  }

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error("Seed process failed.", e);
      await prisma.$disconnect();
      process.exit(1);
    });
})();
