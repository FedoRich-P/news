import {Skeleton} from '../../components/Skeleton/Skeleton.tsx';
import {ComponentType} from "react";

export const withSkeleton = <P extends object>({Component, type, count, direction} : WithSkeletonComponentProps<P>) => {
  return function WithSkeleton({isLoading, ...restProps}: WithSkeletonFnProps<P>) {
    if(isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />
    }
    return <Component {...(restProps as P)} />
  };
};

type WithSkeletonComponentProps<P = object> = {
  type: string;
  count: number;
  direction?: string | undefined;
  Component: ComponentType<P>
}

type WithSkeletonFnProps<P = object> = {
  isLoading: boolean;
} & P;