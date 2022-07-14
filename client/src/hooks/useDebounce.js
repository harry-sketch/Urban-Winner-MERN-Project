import { useEffect, useState } from "react";

const useDebounce = (input, delay) => {
  const [val, setVal] = useState(input);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setVal(input);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [input]);

  return val;
};

export default useDebounce;
