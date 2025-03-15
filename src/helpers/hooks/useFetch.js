import { useEffect, useState } from 'react';

export const useFetch = (fetch, params) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const stringParams = params ? new URLSearchParams(params).toString() : '';

  useEffect(() => ()=> {
    (async () => {
      try{
        setIsLoading(true);
        const response = await fetch(params);
        setData(response);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })()
  }, [fetch, stringParams])
  return {data, isLoading, error}
};