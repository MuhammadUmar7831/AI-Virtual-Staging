'use client'
import Explore from '@/icons/Explore'
import Signup from '@/icons/Signup'
import Upload2 from '@/icons/Upload2'
import React, { useState } from 'react'

const HowToUseOurProduct = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const getCardStyle = (index: number) => {
        if (hoveredIndex === null) return "bg-[#D6DCFF] text-black";

        if (index === 1 && index === hoveredIndex) {
            return "bg-[#615448] text-white"
        } else if (index === hoveredIndex) {
            return "bg-[#615448] text-white rounded-xl"
        } else {
            return "bg-[#E5AA70] text-black"
        }
    };

    const getIconStyle = (index: number) => {
        if (hoveredIndex === null) return "bg-[#D6DCFF] border-dashed";
        return index === hoveredIndex
            ? "bg-[#fbe8c5] border-0"
            : "bg-[#fbe8c5] border-dashed";
    };

    const data = [
        {
            icon: <Signup />,
            heading: "Sign Up",
            para: "Get started by signing into your account. You can log in using your email and password or Google, Apple, or social media accounts",
        },
        {
            icon: <Upload2 width={54} height={40} />,
            heading: "Upload Image",
            para: "Upload a room photo, choose the room type and style—our AI handles the rest.",
        },
        {
            icon: <Explore />,
            heading: "Explore. Save. Enjoy",
            para: "Preview your AI-generated designs, download your favorites, and start turning your vision into reality"
        }
    ];

    return (
        <section className="w-full px-4 sm:px-6 lg:px-20 3xl:p-16 mt-14">
            <div>
                <h1 className="text-center text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] font-normal">
                    How to use our product
                </h1>
                <p className="text-black opacity-80 text-center text-lg font-normal md:text-[32px] mt-4 max-w-4xl mx-auto">
                    Browse our AI-generated interiors and discover how smart design meets stunning aesthetics.
                </p>
            </div>

            <div className='flex justify-center items-center flex-col lg:w-[60%] w-full mx-auto relative mt-10'>
                {data.map((item, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`flex justify-center items-center gap-5 p-5 w-full h-[250px] transition-all duration-300 ${getCardStyle(index)}`}
                        style={index === hoveredIndex ? { boxShadow: '0 20px 30px rgba(0,0,0,0.25)' } : {}}
                    >
                        <div className='w-[25%]'>
                            <div className={`border-2 p-5 rounded-full lg:w-[120px] lg:h-[120px] w-[80px] h-[80px] flex justify-center items-center ${getIconStyle(index)}`}>
                                {item.icon}
                            </div>
                        </div>
                        <div className='w-[75%]'>
                            <h1 className='lg:text-[32px] text-[28px] font-medium'>{item.heading}</h1>
                            <p className='lg:text-[20px] text-[18px] font-medium'>{item.para}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowToUseOurProduct;
