import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, BASE_URL, NewsApiResponse } from '../../api/apiNews.ts';
import { CategoriesApiResponse, ParamsType } from '../../interfaces/interfaces.ts';


export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<NewsApiResponse, ParamsType>({
      query: (params) => {
        const {
          currentPage = 1,
          pageSize = 10,
          category = null,
          keywords = '',
        } = params || {};
        return {
          url: 'search',
          params: {
            apiKey: API_KEY,
            currentPage,
            pageSize,
            category,
            keywords,
          },
        };

      },
    }),
    getLatestNews: builder.query<NewsApiResponse, void>({
      query: () => {
        return {
          url: 'latest-news',
          params: {
            apiKey: API_KEY,
          },
        };
      },
    }),
    getCategories: builder.query<CategoriesApiResponse, void>({
      query: () => {
        return {
          url: 'available/categories',
          params: {
            apiKey: API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetNewsQuery, useGetLatestNewsQuery, useGetCategoriesQuery } = newsApi;
