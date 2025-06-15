'use client'
import Explore from '@/icons/Explore'
import Signup from '@/icons/Signup'
import Upload2 from '@/icons/Upload2'
import React, { useEffect, useState } from 'react'

const HowToUseOurProduct = () => {
    const [num, setNum] = useState(1);


    useEffect(() => {
        const interval = setInterval(() => {
            setNum(prev => (prev === 3 ? 1 : prev + 1));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const getCardStyle = (index: number) => {
        const isActive = index === num - 1;

        if (isActive) {
            switch (index) {
                case 0: return "bg-secondary text-white shadow-2xl rounded-xl";
                case 1: return "bg-[#615448] text-black shadow-2xl";
                case 2: return "bg-[#615448] text-black shadow-2xl rounded-xl";
            }
        } else {
            // Change both card 1 and 2's bg when card 3 is active
            if ((index === 0 || index === 1) && num === 3) {
                return "bg-[#E5AA70]";
            }

            // Card 1 color when card 2 is active
            if (index === 0 && num === 2) {
                return "bg-[#E5AA70] text-white";
            }
        }

        return "bg-[#D6DCFF]";
    };

    const iconStyle = (index: number) => {
        const isActive = index === num - 1;

        if (isActive) {
            switch (index) {
                case 0: return "bg-white border-0";
                case 1: return "bg-[#fbe8c5] border-0";
                case 2: return "bg-[#fbe8c5] border-0";
            }
        } else {
            // Change both card 1 and 2's bg when card 3 is active
            if ((index === 0 || index === 1) && num === 3) {
                return "bg-[#fbe8c5] border-dashed";
            }

            // Card 1 color when card 2 is active
            if (index === 0 && num === 2) {
                return "bg-[#fbe8c5] border-dashed";
            }
        }

        return "bg-[#D6DCFF] border-dashed";
    }


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
                {data.map((item, index) => {
                    const isActive = index === num - 1;

                    return (
                        <div
                            key={index}
                            className={`flex justify-center items-center gap-5 p-5 w-full h-[250px] transition-all duration-500 ${getCardStyle(index)}`}
                            style={isActive ? { boxShadow: '0 20px 30px rgba(0,0,0,0.25)' } : {}}
                        >
                            <div className='w-[25%]'>
                                <div className={`border-2 p-5 rounded-full lg:w-[120px] lg:h-[120px] w-[80px] h-[80px] flex justify-center items-center ${iconStyle(index)}`}>
                                    {item.icon}
                                </div>
                            </div>
                            <div className='w-[75%]'>
                                <h1 className='lg:text-[32px] text-[28px] font-medium'>{item.heading}</h1>
                                <p className='lg:text-[20px] text-[18px] font-medium'>{item.para}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default HowToUseOurProduct;

const data = [
    {
        icon: <Signup />,
        heading: "Sign Up",
        para: "Get started by signing into your account. You can log in using your email and password or Google, Apple, or social media accounts",
    },
    {
        icon: <Upload2 />,
        heading: "Upload Image",
        para: "Upload a room photo, choose the room type and style—our AI handles the rest.",
    },
    {
        icon: <Explore />,
        heading: "Explore. Save. Enjoy",
        para: "Preview your AI-generated designs, download your favorites, and start turning your vision into reality"
    }
];