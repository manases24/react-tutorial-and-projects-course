import { Tour as TourType } from "./interfaces";
import { Tour } from "./Tour";

interface ToursProps {
  tours: TourType[];
  removeTour: (id: string) => void;
}

export const Tours = ({ tours, removeTour }: ToursProps) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>

      <div className="tours">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};


