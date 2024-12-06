import { useState } from "react";

export const useToggle = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(() => !show);
  };

  return { show, handleToggle };
};
