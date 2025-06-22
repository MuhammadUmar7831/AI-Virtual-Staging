import Clock from '@/icons/Clock'
import DataBackup from '@/icons/DataBackup'
import DecisionMaking from '@/icons/DecisionMaking'
import DollarBag from '@/icons/DollarBag'
import Graph from '@/icons/Graph'
import InteractiveBoardVisual from '@/icons/InteractiveBoardVisual'
import VectorDiagonal from '@/icons/VectorDiagonal'
import React from 'react'

const WhyChooseUs = () => {
    const chooseUsData = [
        {
            icon: <Clock />,
            heading: "Faster Turnaround",
            para: "Ideal for meeting tight client deadlines",
        },
        {
            icon: <DollarBag />,
            heading: "Cost-Effective Solutions",
            para: "Reduce the need for expensive design consultations"
        },
        {
            icon: <InteractiveBoardVisual />,
            heading: "Client-Ready Visuals",
            para: "Present polished before-and-after mockups to impress clients",
        },
        {
            icon: <Graph />,
            heading: "Market More Listings",
            para: "Create ready-to-post interior visuals for social media without a design team",
        },
        {
            icon: <DataBackup />,
            heading: "Scalable for Agencies",
            para: "Perfect for interior design firms or real estate agencies handling high volumes of projects",
        },
        {
            icon: <DecisionMaking />,
            heading: "Decide 2x Faster",
            para: "Helping buyers make quicker and more confident purchase decisions with our high-end images"
        }
    ];

    return (
        <section className="w-full px-4 sm:px-6 lg:px-20 3xl:p-16 mt-14">
            <h1 className="text-center heading">
                Why choose us?
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mt-14">
                {chooseUsData.map((data, index) => (
                    <div
                        className="flex flex-col items-center text-center px-4"
                        key={index}
                    >
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-secondary p-3 rounded-[10px] flex items-center justify-center">
                            {data.icon}
                        </div>
                        <p className="font-medium text-[18px] sm:text-[22px] md:text-[26px] mt-4">
                            {data.heading}
                        </p>
                        <p className="font-normal text-[15px] sm:text-[17px] md:text-[20px] text-black opacity-70 mt-2">
                            {data.para}
                        </p>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center'>
                <button className="bg-gradient-to-r to-[#2C2F40] from-[#D6DCFF] text-white px-6 py-4 rounded-lg font-normal shadow-lg hover:opacity-90 transition duration-300 mt-6 flex justify-center items-center gap-3 cursor-pointer w-[320px]">
                    Generate your first image <VectorDiagonal stroke='white'/>
                </button>
            </div>
        </section>
    );
};

export default WhyChooseUs;
