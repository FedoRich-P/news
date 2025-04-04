import { configureStore } from '@reduxjs/toolkit';
import { newsApi } from './services/newsApi.ts';
import { newsReducer, newsSlice } from './features/news/newsSlice.ts';

export const store = configureStore({
  reducer: {
    [newsSlice.name]: newsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch