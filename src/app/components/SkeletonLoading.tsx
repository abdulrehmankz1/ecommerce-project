import React from 'react'

const SkeletonLoading = () => {
  return (
    <div className="container mx-auto flex flex-wrap">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="relative m-5 flex w-full max-w-[270px] flex-col overflow-hidden bg-white">
          <div className="animate-pulse bg-gray-200 aspect-w-4 aspect-h-3"></div>
          <div className="mt-4 px-3 pb-5">
            <div className="animate-pulse bg-gray-200 w-4/4 h-48"></div>
            <div className="mt-2">
              <div className="animate-pulse h-4 bg-gray-200 w-1/2"></div>
              <div className="animate-pulse h-4 bg-gray-200 w-2/4 mt-2 ms-auto"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoading