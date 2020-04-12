import { useRef, useEffect } from 'react';
// Usage:
// const isFirstRender = useIsFirstRender();
// useEffect(() => {
//   if (isFirstRender) {
//     console.log('First Render');
//   } else {
//     console.log('Subsequent Render');
//   }
// });

const useIsFirstRender = () => {
  const isFirstRenderRef = useRef(true);
  useEffect(() => {
    isFirstRenderRef.current = false;
  }, []);
  return isFirstRenderRef.current;
};

export default useIsFirstRender;
