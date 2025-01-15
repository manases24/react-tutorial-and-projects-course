import Image from "next/image";
import Link from "next/link";
import mapsImg from "@/images/maps.jpg";

interface Props {
  params: { id: string };
}

interface Tour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}

// const url = "https://www.course-api.com/images/tours/tour-1.jpeg";
const url = "https://www.course-api.com/react-tours-project";

const fetchTours = async (id: string) => {
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
};

export default async function TourDetailPage({ params }: Props) {
  const { id } = params;

  const data = await fetchTours(id);
  const tour = data.find((tour) => tour.id === id);

  return (
    <div>
      <h1 className="text-4xl">ID : {id}</h1>
      <section className="flex gap-x-4 mt-4">
        <div>
          <Image
            src={mapsImg}
            alt="maps"
            width={192}
            height={192}
            className="w-48 h-48 object-cover rounded"
          />
          <h2>local image</h2>
        </div>
        <div>
          <Image
            src={tour?.image ?? ""}
            alt="tour"
            width={192}
            height={192}
            priority
            className="w-48 h-48 object-cover rounded"
          />
          <h2>remote image</h2>
        </div>
      </section>
      <Link
        className="underline text-xl text-blue-500 inline-block mt-8"
        href="/tours"
      >
        Regresar
      </Link>
    </div>
  );
}
