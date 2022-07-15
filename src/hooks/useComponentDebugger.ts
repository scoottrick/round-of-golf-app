import { useEffect, useRef } from 'react';

export function useComponentDebugger(name: string, props: any) {
  const changedProps = useRef({});
  const previousProps = useRef(props);
  const lastRenderTimestamp = useRef(Date.now());
  const propKeys = Object.keys({ ...props, ...previousProps });
  changedProps.current = propKeys.reduce((obj, key) => {
    if (props[key] === previousProps.current[key]) {
      return obj;
    }
    const previousValue = previousProps.current[key];
    const currentValue = props[key];
    return {
      ...obj,
      [key]: { previousValue, currentValue },
    };
  }, {});
  const debugInfo = {
    changedProps: changedProps.current,
    previousProps: previousProps.current,
    newProps: props,
    timeSinceLastRender: Date.now() - lastRenderTimestamp.current,
  };

  useEffect(() => {
    previousProps.current = props;
    lastRenderTimestamp.current = Date.now();
    console.debug('[debug]', name, debugInfo);
  });
}
