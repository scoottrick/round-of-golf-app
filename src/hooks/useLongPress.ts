import { useEffect, useRef } from 'react';
import { useEventListener } from './useEventListener';
import { useTimeout } from './useTimeout';

export function useLongPress(element: any, callback: () => void) {
  const callbackRef = useRef(callback);

  const { clear, reset } = useTimeout(1000, callback);

  useEffect(() => {
    clear();
  }, []);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEventListener(element, 'mousedown', reset);
  useEventListener(element, 'touchstart', reset);

  useEventListener(element, 'mouseup', clear);
  useEventListener(element, 'mouseleave', clear);
  useEventListener(element, 'touchend', clear);
}
