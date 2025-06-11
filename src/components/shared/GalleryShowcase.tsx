import VectorDiagonal from '@/icons/VectorDiagonal'
import React from 'react'

const GalleryShowcase = () => {
    return (
        <div className="w-full px-6 lg:px-20 3xl:p-16 bg-secondary">
            <div className='pt-8 flex justify-center items-center gap-2 flex-col'>
                <p className='text-center text-[40px] md:text-[80px] font-normal text-white'>Designs that speak for themselves</p>
                <p className='text-center text-[20px] md:text-[32px] text-white mt-3 w-[70%] mx-auto'>
                    Browse our AI-generated interiors and discover how smart design meets stunning aesthetics
                </p>
                <button className="bg-[#D6DCFF] flex items-center gap-2 text-black px-[30px] py-[18px] lg:px-[40px] lg:py-[25px] rounded-[14px] font-normal mx-auto text-[15px] lg:text-[24px] cursor-pointer my-5">
                    Explore gallery <VectorDiagonal stroke='black' />
                </button>
            </div>
        </div>
    )
}

export default GalleryShowcase
