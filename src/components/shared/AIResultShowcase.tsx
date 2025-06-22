'use client';
import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const AIResultShowcase = () => {
    const [selectedRoom, setSelectedRoom] = useState<string>('Lounge');

    const roomTypes = ['Kitchen', 'Lounge', 'Bedroom', 'Living Room'];

    // const roomsImages = [
    //     {
    //         type: 'Lounge',
    //         before: '/home/before-lounge.jpg',
    //         after: '/home/after-lounge.jpg',
    //     },
    //     {
    //         type: 'Kitchen',
    //         before: '/home/gallery1.jpg',
    //         after: '/home/client1.jpg',
    //     },
    // ];


    return (
        <div className="w-full px-6 lg:px-20 3xl:p-16 mt-14 overflow-hidden">
            <div>
                <p className="text-center text-[40px] md:text-[80px] font-normal">
                    See results of our AI model
                </p>
                <p className="text-center text-[20px] md:text-[32px] text-[#000000] opacity-80 mt-8">
                    Slide to See the Transformation - Experience Before & After <br />
                    Results Powered by Our AI.
                </p>
            </div>

            <div className="flex justify-center items-center md:gap-8 mt-14 gap-5">
                {roomTypes.map((room, index) => (
                    <p
                        key={index}
                        className={`${room === selectedRoom
                            ? 'bg-[#2C2F40] text-white'
                            : ''
                            } text-[#737373] md:text-lg cursor-pointer rounded-xl transition-all px-6 py-1.5`}
                        onClick={() => {
                            setSelectedRoom(room);
                        }}
                    >
                        {room}
                    </p>
                ))}
            </div>

            <div className='rounded-md overflow-hidden my-8'>
                <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src="/after.png" srcSet="/after.png" alt="After" />}
                    itemTwo={<ReactCompareSliderImage src="/before.jpg" srcSet="/before.jpg" alt="Before" />}

                />
            </div>
        </div>
    );
};

export default AIResultShowcase;
