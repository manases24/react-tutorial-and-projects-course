"use client";

import { useState } from "react";

interface Props {
  value: number;
}

export const Counter = ({ value }: Props) => {
  const [counter, setCounter] = useState(value);
  return (
    <div className="flex flex-col items-center w-[100px]">
      <span className="text-5xl font-bold">{counter}</span>

      <div className="flex">
        <button
          onClick={() => setCounter(counter + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-blue-500  text-white px-4 py-2 mt-4  hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>

        <button
          onClick={() => setCounter(counter - 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-blue-500  text-white px-4 py-2 mt-4  hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </div>
  );
};
