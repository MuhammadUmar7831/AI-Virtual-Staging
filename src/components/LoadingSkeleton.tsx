import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingSkeleton = () => {
  const skeletonCount = 5;

  return (
    <SkeletonTheme baseColor="#f0f0f0" highlightColor="#e2e8f0">
      <div className="flex flex-col gap-4 w-full">
        {[...Array(skeletonCount)].map((_, i) => (
          <div
            key={i}
            className="w-full bg-white rounded-xl shadow-md p-4 border border-[#E0E0E0] flex flex-col gap-4 transition-all animate-pulse"
          >
            {/* Top Row: Avatar + Text */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Skeleton circle height={50} width={50} />

                <div className="flex flex-col gap-1">
                  <Skeleton width={140} height={18} />
                  <Skeleton width={180} height={14} />
                </div>
              </div>

              <Skeleton height={32} width={100} borderRadius={10} />
            </div>
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
};

export default LoadingSkeleton;
