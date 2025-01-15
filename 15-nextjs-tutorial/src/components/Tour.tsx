"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}

export const Tour = ({ id, image, info, name, price }: Props) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="bg-white rounded-lg shadow-md transition-shadow hover:shadow-lg relative">
      <Image
        className="h-80 w-full object-cover rounded-t-lg"
        src={image}
        alt={name}
        width={500}
        height={500}
      />

      <span className="absolute top-0 right-0 bg-primary-500 text-white py-2 px-4 text-xs uppercase tracking-widest rounded-tr-lg">
        ${price}
      </span>

      <div className="p-6">
        <Link className="hover:text-blue-500" href={`/tours/${id}`}>
          <h5 className="text-center mb-4 font-medium text-lg leading-tight">
            {name}
          </h5>
        </Link>

        <p className="text-gray-600 leading-relaxed mb-5">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="bg-blue-500 py-2 px-4 rounded-lg text-white font-semibold capitalize transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ml-2"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
      </div>
    </article>
  );
};
