export interface INews {
  author: string;
  category: CategoriesType[];
  description: string;
  id: string;
  image: string | undefined;
  language: string;
  published: string;
  title: string;
  url: string;
};

export type IFilters = {
  currentPage: number;
  pageSize: number;
  category: CategoriesType | null;
  keywords: string;
}

export type NewsApiResponse = {
  news: INews[] ;
  page: number;
  status: string
};

export type CategoriesApiResponse = {
  categories: CategoriesType[];
  description: string;
  status: string
};

export type IPaginationProps = {
  currentPage: number;
  totalPages: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handlePageNumber: (page: number) => void;
}

export type SkeletonType = 'banner' | 'item'
export type DirectionsType = 'row' | 'column'

export type ParamsType = Partial<IFilters>

export type CategoriesType =
  'regional' |
  'technology' |
  'lifestyle' |
  'business' |
  'general' |
  'programming' |
  'science' |
  'entertainment' |
  'world' |
  'sports' |
  'finance' |
  'academia' |
  'politics' |
  'health' |
  'opinion' |
  'food' |
  'game' |
  'fashion' |
  'academic' |
  'crap' |
  'travel' |
  'culture' |
  'economy' |
  'environment' |
  'art' |
  'music' |
  'notsure' |
  'CS' |
  'education' |
  'redundant' |
  'television' |
  'commodity' |
  'movie' |
  'entrepreneur' |
  'review' |
  'auto' |
  'energy' |
  'celebrity' |
  'medical' |
  'gadgets' |
  'design' |
  'EE' |
  'security' |
  'mobile' |
  'estate' |
  'funny'