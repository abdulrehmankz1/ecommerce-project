import React from 'react'

const SkeletonLoading = () => {
    return (
        <div className="container mx-auto my-20">
            {[...Array(1)].map((_, index) => (
                <div key={index} className="grid-cols-2 grid overflow-hidden bg-white">
                    <div className="animate-pulse bg-gray-200 aspect-w-4 aspect-h-3 w-[60%] h-[400px] mx-auto"></div>
                    <div className="mt-4 px-3 pb-5">
                        <div className="animate-pulse bg-gray-200 w-[200px] h-[40px]"></div>
                        <div className="animate-pulse bg-gray-200 w-[120px] h-[40px] mt-4"></div>
                        <div className="animate-pulse bg-gray-200 w-[200px] h-[30px] mt-4"></div>
                        <div className="animate-pulse bg-gray-200 w-[80px] h-[20px] mt-24"></div>
                        <div className='flex align-middle'>
                            <div className="animate-pulse bg-gray-200 w-[100px] h-[40px] mt-2 me-2"></div>
                            <div className="animate-pulse bg-gray-200 w-[100px] h-[40px] mt-2 me-2"></div>
                            <div className="animate-pulse bg-gray-200 w-[100px] h-[40px] mt-2 me-2"></div>
                        </div>
                        <div className="animate-pulse bg-gray-200 w-[600px] h-[40px] mt-4"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkeletonLoading