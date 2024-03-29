import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 320,
    height: 320,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
