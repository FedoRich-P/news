import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IFilters, INews } from '../../../interfaces/interfaces.ts';
import { PAGE_SIZE } from '../../../constants/constants.ts';

const initialState: State = {
  news: [],
  filters: {
    currentPage: 1,
    pageSize: PAGE_SIZE,
    category: null,
    keywords: '',
  }
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload
    },
    setFilters: (state, action: PayloadAction<SetFilters>) => {
      const {key, value} = action.payload;
      state.filters = {...state.filters, [key]: value};
    },
  },
  selectors: {
    selectNewsFilters: (state) => state.filters,
  }
})

export const { setNews, setFilters} = newsSlice.actions
export const {selectNewsFilters} = newsSlice.selectors
export const  newsReducer = newsSlice.reducer

type SetFilters = {
  key: keyof IFilters;
  value: number | string | null;
};

type State = {
  news: INews[];
  filters: IFilters;
}

