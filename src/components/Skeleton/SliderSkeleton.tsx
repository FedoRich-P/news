import { Skeleton } from './Skeleton.tsx';

export const SliderSkeleton = () => (
  <div>
    <Skeleton count={5} type="item" direction="row" />
  </div>
);