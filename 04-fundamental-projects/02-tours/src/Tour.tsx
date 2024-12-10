import { useState } from "react";
import { Tour as TourType } from "./interfaces";

interface Props {
  tour: TourType;
  removeTour: (id: string) => void;
}

export const Tour = ({ tour, removeTour }: Props) => {
  const [readMore, setReadMore] = useState(false);

  const { id, name, info, image, price } = tour;

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button className="info-btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show less" : "Read more"}
        </button>
        <button
          className="delete-btn btn-block btn"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};
