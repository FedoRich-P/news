import { Pagination } from '../Pagination/Pagination.tsx';
import { ReactNode } from 'react';
import { IPaginationProps } from '../../interfaces/interfaces.ts';

export const PaginationWrapper = ({top, bottom, children, ...paginationProps}: PaginationWrapperProps) => {
  return (
    <>
      {top && <Pagination {...paginationProps}/>}
      {children}
      {bottom && <Pagination {...paginationProps}/>}
    </>
  );
};

type PaginationWrapperProps = IPaginationProps & {
  children: ReactNode;
  top?: boolean;
  bottom?: boolean;
}