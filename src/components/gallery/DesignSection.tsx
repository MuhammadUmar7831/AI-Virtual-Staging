import React from 'react';
import Image from 'next/image';
import VectorDiagonal from '@/icons/VectorDiagonal';
import GalleryShowcase from '../shared/GalleryShowcase';

const images = [
    "/gallery/image1.jpg",
    "/gallery/image2.jpg",
    "/gallery/image3.jpg",
    "/gallery/image4.jpg",
    "/gallery/image5.jpg",
    "/gallery/image6.jpg"
];

const DesignSection = () => {
    return (
        <div className="w-full px-6 lg:px-20 relative 3xl:p-16 mt-14 min-h-screen bg-gradient-to-r from-[#2C2F40] to-[#D6DCFF] border-t-[3px] border-b-[3px] border-l-0 border-[#d6dcff5f] rounded-xl py-12 flex flex-col items-center overflow-x-hidden">
            <div className="flex flex-wrap justify-center gap-6">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="relative bg-white rounded-xl overflow-hidden"
                        style={{ width: "382px", height: "382px" }}
                    >
                        <div className="absolute top-3 left-3 flex gap-2 z-10">
                            <div className="bg-white text-black text-sm px-3 py-1 rounded-full">
                                Lounge
                            </div>
                            <div className="bg-white text-black text-sm px-3 py-1 rounded-full">
                                Traditional
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative w-full h-full">
                            <Image
                                src={src}
                                alt={`Design ${index + 1}`}
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <button className="bg-secondary flex items-center gap-5 text-white cursor-pointer py-[35px] px-[90px] rounded-[14px] font-semibold my-10 text-[25px]">
                Try out <VectorDiagonal stroke='white' />
            </button>
            <div className=''>
            <GalleryShowcase color='transparent' />
            </div>
            <div className='flex items-center justify-center mb-12'>
                <button className="bg-[#D6DCFF] text-black px-6 py-6 rounded-lg font-normal shadow-lg hover:opacity-90 transition duration-300 mt-6 flex justify-center items-center gap-3 cursor-pointer w-[320px text-[20px]">
                    Generate your first image <VectorDiagonal stroke='black'/>
                </button>
            </div>
        </div>
    );
};

export default DesignSection;
