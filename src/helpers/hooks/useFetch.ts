import {useEffect, useState} from 'react';
import {GetNewsProps} from "../../api/apiNews.ts";

export const useFetch = <T>({fetch, params}: UseFetch<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const queryString = params
      ? new URLSearchParams({
        currentPage: String(params.currentPage),
        pageSize: String(params.pageSize),
        category: params.category || '',
        keywords: params.keywords || '',
      }).toString()
      : '';

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response: T = params ? await fetch(params) : await fetch();
        setData(response);
      } catch (error) {
        setError(error as Error);
        // console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetch, queryString]);


  return {data, isLoading, error}
};

type FetchFunction<T> = (params?: GetNewsProps) => Promise<T>;

type UseFetch<T> = {
  fetch: FetchFunction<T>;
  params?: GetNewsProps;
}

// const stringParams  = {
//   currentPage: String(params?.currentPage),
//   pageSize: String(params?.pageSize),
//   category: params?.category || '',
//   keywords: params?.keywords || '',
// };
//
// const safeParams = params || {
//   currentPage: 1,
//   pageSize: 10,
//   category: null,
//   keywords: '',
// };
//
// const queryString = new URLSearchParams(stringParams).toString();