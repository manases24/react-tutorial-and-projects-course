import { BackHome } from "@/components";
import { Tour } from "@/components/Tour";

interface Tour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}

const url = "https://www.course-api.com/react-tours-project";

// Server Component
export default async function ToursPage() {
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  console.log(data);
  return (
    <section>
      <div className="text-center">
        <h2 className="text-3xl font-semibold">our tours</h2>
        <div className="bg-primary-500 w-28 h-1 mt-4 mx-auto"></div>{" "}

      </div>

      <div className="py-8 grid grid-rows-1 gap-8">
        {data.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
}
