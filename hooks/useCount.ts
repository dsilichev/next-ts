import { useCallback, useEffect, useState } from "react";

export function useCount(initialValue: number) {
  // console.log("inside");
  let [count, setCount] = useState(initialValue);

  const decrement = useCallback(() => {
    setCount((prevcount) => prevcount - 1);
  }, []);
  const increment = useCallback(() => {
    setCount((prevcount) => prevcount + 1);
  }, []);

  return { count, decrement, increment };
}
