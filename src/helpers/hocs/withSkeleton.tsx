import {Skeleton} from '../../components/Skeleton/Skeleton.tsx';
import {ComponentType} from "react";
import { DirectionsType, SkeletonType } from '../../interfaces/interfaces.ts';

export const withSkeleton = <P extends object>({Component, type, count, direction} : WithSkeletonComponentProps<P>) => {
  return function WithSkeleton({isLoading, ...restProps}: WithSkeletonFnProps<P>) {
    if(isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />
    }
    return <Component {...(restProps as P)} />
  };
};

type WithSkeletonComponentProps<P = object> = {
  type: SkeletonType;
  count: number;
  direction?: DirectionsType;
  Component: ComponentType<P>
}

type WithSkeletonFnProps<P = object> = {
  isLoading: boolean;
} & P;