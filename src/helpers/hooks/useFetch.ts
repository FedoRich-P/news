import { useEffect, useState } from 'react';

export const useFetch = <T, P>(fetch: FetchFunction<P, T>, params?: P): UseFetchResult<T> => {
// export const useFetch = <T>({fetch, params}: UseFetch<T>): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>([] as T);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const stringParams = params ? new URLSearchParams(params).toString() : '';

  useEffect(() => {
    (async () => {
      if(!params) return
      try {
        setIsLoading(true);
        const response =  await fetch(params);
        setData(response);
      } catch (error) {
        setError(error as Error);
        // console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetch, stringParams]);


  return {data, isLoading, error}
};

type FetchFunction<P, T> = {
  (params: P): Promise<T>
};

// type UseFetch<T, P> = {
//   fetch: FetchFunction<T, P>;
//   params?: P;
// }

type UseFetchResult<T> = {
  data: T | null | undefined;
  isLoading: boolean;
  error: Error | null;
}

// const queryString = params
//     ? new URLSearchParams({
//       currentPage: String(params.currentPage),
//       pageSize: String(params.pageSize),
//       category: params.category || '',
//       keywords: params.keywords || '',
//     }).toString()
//     : '';

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