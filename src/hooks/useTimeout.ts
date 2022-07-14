import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

export function useTimeout(delay: number, callback: () => void) {
  const callbackRef: MutableRefObject<() => void> = useRef(callback);
  const timeoutRef: MutableRefObject<undefined | NodeJS.Timeout> = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(callbackRef.current, delay);
  }, [delay]);

  const clear = useCallback(() => {
    clearTimeout(timeoutRef.current);
  }, []);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  return { clear, reset };
}
