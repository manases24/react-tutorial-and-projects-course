import { BackHome, Counter } from "@/components";

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full space-y-6">
      <h1 className="text-7xl">Counter Page</h1>
      <BackHome />
      <span>Productos en el carrito</span>
      <Counter value={5} />
    </div>
  );
}
