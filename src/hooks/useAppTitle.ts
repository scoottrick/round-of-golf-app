import { useEffect } from 'react';

export function useAppTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, []);
}
