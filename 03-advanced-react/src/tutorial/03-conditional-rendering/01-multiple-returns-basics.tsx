import { useEffect, useState } from "react";

export const MultipleReturnBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // done fetching data
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return <div>01-multiple-returns-basics</div>;
};
