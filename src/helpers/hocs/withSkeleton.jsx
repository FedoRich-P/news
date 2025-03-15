import { Skeleton } from '../../components/Skeleton/Skeleton.jsx';

export const withSkeleton = (Component, type, count, direction) => {
  return function WithSkeleton({isLoading, ...restProps}) {
    if(isLoading) {
      return <Skeleton type={type} count={count} derection={direction} />
    }
    return <Component {...restProps} />
  };
};
