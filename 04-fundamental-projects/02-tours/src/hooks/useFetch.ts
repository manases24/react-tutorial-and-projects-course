import { useEffect, useState } from "react";
import { Tour } from "../interfaces";

export const useFetch = (url: string) => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setLoading(false);
      setTours(data);
    } catch (error: any) {
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { tours, setTours, loading, fetchData };
};
