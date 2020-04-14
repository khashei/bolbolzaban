import { useState, useEffect } from 'react';

const useAsync = (asyncCall, condition = []) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Basic implementation to handle race conditions
    // When component might unmount before async call finishes
    let isCancelled = false;
    const performAsync = async () => {
      setIsLoading(true);
      try {
        const data = await asyncCall();
        if (data && !isCancelled) setResponse(data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    // Fetch for data
    performAsync();

    return () => (isCancelled = true);
  }, [asyncCall, ...condition]);

  return { isLoading, response, error };
};

export default useAsync;
