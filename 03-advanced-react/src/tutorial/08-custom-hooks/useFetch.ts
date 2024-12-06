import { useEffect, useState } from "react";

interface Props {
  avatar_url: string;
  name: string;
  company: string;
  bio: string;
}

export const useFetch = (url: string) => {
  const [user, setUser] = useState<Props | null>(null);
  const [error, setError] = useState<boolean | null>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }

        const data = await res.json();
        setUser(data);
      } catch (error: any) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return { user, error, loading };
};
