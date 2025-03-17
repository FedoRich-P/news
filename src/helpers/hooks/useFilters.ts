import { useState } from 'react';
import { GetNewsProps } from '../../api/apiNews.ts';

export const useFilters = (initialFilters: GetNewsProps) => {
  const [filters, setFilters] = useState(initialFilters);

  const changeFilter = (key: string, value: number | string | null) => {
    setFilters((prevState) => ({ ...prevState, [key]: value }));
  };

  return {filters, changeFilter}
};