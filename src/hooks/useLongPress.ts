import { MutableRefObject, useEffect, useRef } from 'react';
import { useEventListener } from './useEventListener';
import { useTimeout } from './useTimeout';

export function useLongPress(
  elementRef: MutableRefObject<HTMLElement>,
  callback: () => void
) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const { clear, reset } = useTimeout(1000, callback);
  useEffect(() => {
    clear();
  }, []);

  useEventListener(elementRef, 'mousedown', reset);
  useEventListener(elementRef, 'touchstart', reset);

  useEventListener(elementRef, 'mouseup', clear);
  useEventListener(elementRef, 'mouseleave', clear);
  useEventListener(elementRef, 'touchend', clear);
}
