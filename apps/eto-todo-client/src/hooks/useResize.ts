import { useEffect, useState } from 'react';
import { breakpoints } from '../styles/breakpoints';

interface Resize {
  documentWidth: number;
  documentHeight: number;
  screenWidth: number;
  screenHeight: number;
  breakpoints: typeof breakpoints;
}

const useResize = (): Resize | null => {
  const computeSizes = () => {
    if (typeof window === 'undefined') {
      return null;
    }
    return {
      documentWidth: Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      ),
      documentHeight: Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      ),
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      breakpoints,
    };
  };

  const [sizes, setSizes] = useState<Resize | null>(null);

  useEffect(() => {
    window.addEventListener('resize', () => setSizes(computeSizes()));
    setSizes(computeSizes());

    return () => {
      window.removeEventListener('resize', () => setSizes(computeSizes()));
    };
  }, []);

  return sizes;
};

export default useResize;
