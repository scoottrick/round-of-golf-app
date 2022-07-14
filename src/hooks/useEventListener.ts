import { useEffect, useRef } from 'react';

export function useEventListener(
  element: HTMLElement,
  eventType: string,
  callback: (event: any) => void
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!element) return;
    const listener = e => callbackRef.current(e);
    element.addEventListener(eventType, listener);

    return () => {
      element.removeEventListener(eventType, listener);
    };
  }, [element, eventType]);
}
