import { MutableRefObject, useEffect, useRef } from 'react';

export function useEventListener(
  elementRef: MutableRefObject<HTMLElement>,
  eventType: string,
  callback: (event: any) => void
) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const element = elementRef.current;
  useEffect(() => {
    if (!element) return;
    const listener = e => callbackRef.current(e);
    element.addEventListener(eventType, listener);

    return () => {
      element.removeEventListener(eventType, listener);
    };
  }, [elementRef, eventType]);
}
