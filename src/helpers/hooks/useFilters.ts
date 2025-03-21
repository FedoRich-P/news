import { useState } from 'react';
import { IFilters } from '../../interfaces/interfaces.ts';

export const useFilters = (initialFilters: IFilters) => {
  const [filters, setFilters] = useState<IFilters>(initialFilters);

  const changeFilter = (key: string, value: number | string | null) => {
    setFilters((prevState) => ({ ...prevState, [key]: value }));
  };

  return {filters, changeFilter}
};