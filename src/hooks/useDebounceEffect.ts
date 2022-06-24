import { DependencyList, EffectCallback, useCallback, useEffect } from "react";

const useDebouncedEffect = (
  effect: EffectCallback,
  delay: number,
  deps: DependencyList
) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(effect, deps);

  useEffect(() => {
    const handler = setTimeout(callback, delay);

    return () => clearTimeout(handler);
  }, [callback, delay]);
};

export { useDebouncedEffect };
