import Home from '@/icons/Home';
import Stars from '@/icons/Stars';
import Style from '@/icons/Style';
import UploadIcon from '@/icons/Upload';
import VectorDiagonal from '@/icons/VectorDiagonal';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (

        <div className="w-full px-6 lg:px-20 3xl:p-16">
            <div className="relative h-[130vh] w-full rounded-3xl overflow-hidden">
                <Image
                    src="/home/hero-image.jpg"
                    alt="Banner image"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

                {/* Content Layer */}
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] flex flex-col lg:flex-row justify-between items-start z-20 gap-8'>
                    {/* Text Block (lower than the card) */}
                    <div className="w-full lg:w-[45%] mt-8 lg:mt-16">
                        <h1 className='text-white text-[36px] lg:text-[72px] leading-tight font-normal'>
                            Design Smarter, Live Better.
                        </h1>
                        <p className='text-white opacity-80 text-[18px] lg:text-[30px] mt-4'>
                            Our AI transforms your space with personalized interiors that reflect your style, effortlessly.
                        </p>
                    </div>
                    {/* Card Block */}
                    <div className="w-full lg:w-[45%] rounded-2xl shadow-lg p-6 flex flex-col justify-between bg-white/10 backdrop-blur-lg border-[3px] border-white/20">
                        <div className='bg-[#171717] w-full flex-col h-[285px] rounded-2xl flex justify-center items-center gap-5'>
                            <UploadIcon />
                            <p className='text-[#737373] font-normal'>Upload Image</p>
                            <p className='text-[#737373] font-normal text-[10px]'>(JPEG, PNG, PDF, SVG)</p>
                        </div>
                        <div className='mt-8 flex justify-between w-full gap-4'>
                            <div className='space-y-2 w-full'>
                                <div className='flex items-center gap-2'>
                                    <Home />
                                    <p className='text-[14px] font-bold text-white'>Area</p>
                                </div>
                                <div>
                                    <select className="bg-[#171717] px-2 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 w-full text-[#737373] cursor-pointer">
                                        <option value="option1" className=''>Lounge</option>
                                    </select>
                                </div>
                            </div>
                            <div className='space-y-2 w-full mt-[3px]'>
                                <div className='flex items-center gap-2'>
                                    <Style />
                                    <p className='text-[14px] font-bold text-white'>Style</p>
                                </div>
                                <div>
                                    <select className="bg-[#171717] px-2 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 w-[100%] text-[#737373] cursor-pointer">
                                        <option value="option1" className=''>Lounge</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button className="bg-gradient-to-r from-[#2C2F40] to-[#D6DCFF] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition duration-300 mt-6 flex justify-center items-center gap-1 cursor-pointer">

                            <Stars />
                            Generate
                        </button>
                    </div>
                    {/* Button */}
                    <button className="bg-secondary flex items-center gap-2 text-white py-[20px] px-[70px] rounded-[14px] z-30 absolute bottom-0 font-semibold">
                        Try out <VectorDiagonal stroke='white' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
