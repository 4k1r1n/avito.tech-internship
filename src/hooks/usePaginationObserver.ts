import { useRef, useEffect } from 'react';

export const usePaginationObserver = (
  ref: React.MutableRefObject<HTMLElement | null>,
  isLoading: boolean,
  canLoad: boolean,
  callback: () => void
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const cleanupObserver = () => {
    if (observer.current) {
      observer.current.disconnect();
    }
  };

  useEffect(() => {
    if (isLoading) return;

    cleanupObserver();

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && canLoad) {
        callback();
      }
    });

    const currentElement = ref.current;

    if (currentElement) {
      observer.current.observe(currentElement);
    }

    return () => {
      cleanupObserver();
    };
  }, [isLoading]);
};