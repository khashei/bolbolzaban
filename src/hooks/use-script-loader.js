import { useEffect, useState } from 'react';

// const script = document.createElement('script');
// script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`;
// script.async = true;
// document.body.appendChild(script);
// script.addEventListener('load', () => {
// });

const useScriptLoader = (src, async = true) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    document.body.appendChild(script);
    script.addEventListener('load', () => {
      setIsLoaded(true);
    });
  }, [src]);

  return isLoaded;
};

export default useScriptLoader;
