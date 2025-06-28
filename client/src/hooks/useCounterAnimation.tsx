import { useEffect, useState } from "react";

export function useCounterAnimation(target: number, trigger: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [target, trigger, duration]);

  return count;
}
