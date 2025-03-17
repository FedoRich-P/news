import { Pagination } from '../Pagination/Pagination.tsx';
import { ReactNode } from 'react';

export const PaginationWrapper = ({top, bottom, children, ...paginationProps}: PaginationWrapperProps) => {
  return (
    <>
      {top && <Pagination {...paginationProps}/>}
      {children}
      {bottom && <Pagination {...paginationProps}/>}
    </>
  );
};

type PaginationWrapperProps = Pagination & {
  children: ReactNode;
  top: boolean;
  bottom: boolean;
}