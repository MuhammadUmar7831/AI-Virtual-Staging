'use client'
import LeftArrow from '@/icons/LeftArrow';
import RightArrow from '@/icons/RightArrow';
import Image from 'next/image';
import React, { useState } from 'react'

const AIResultShowcase = () => {
    const [selectedRoom, setSelectedRoom] = useState<string>("Lounge");

    const roomTypes = [
        "Kitchen",
        "Lounge",
        "Bedroom",
        "Living Room"
    ]

    const roomsImages = [
        {
            type: "Lounge",
            before: "/home/before-lounge.jpg",
            after: "/home/after-lounge.jpg",
        },
        {
            type: "Kitchen",
            before: "/home/iphone.png",
            after: "/home/client1.jpg",
        }
    ]

    return (
        <div className="w-full px-6 lg:px-20 3xl:p-16 mt-14">
            <div>
                <p className='text-center text-[40px] md:text-[80px] font-normal'>See results of our AI model</p>
                <p className='text-center text-[20px] md:text-[32px] text-[#000000] opacity-80 mt-8'>
                    Slide to See the Transformation - Experience Before & After <br /> Results Powered by Our AI.
                </p>
            </div>
            <div className='flex justify-center items-center md:gap-8 mt-14 gap-5'>
                {
                    roomTypes.map((room) => (
                        <p className={`  ${room === selectedRoom ? "bg-[#2C2F40] px-6 py-[6px] text-white rounded-[15px]" : ""} text-[#737373] md:text-[24px] text-[18px] font-normal cursor-pointer`} onClick={() => setSelectedRoom(room)}>
                            {room}
                        </p>
                    ))
                }
            </div>
            <div className='w-[100%] h-[604px] relative mx-auto my-8 flex justify-start items-center'>
                <button className='z-100 absolute left-[-20px] lg:left-[-30px] bg-white px-2 py-[26px] rounded-full shadow-2xl shadow-black font-normal text-[14px] flex items-center justify-center gap-2 cursor-pointer'>
                    <LeftArrow/>
                    <p>Drag</p>
                    <RightArrow/>
                </button>
                {/* AFter Image */}

                <Image
                    src={roomsImages.find((room) => room.type === selectedRoom)?.after || ""}
                    alt='image'
                    className='rounded-2xl'
                    fill
                />
                {/* Before Image */}
                <Image
                    src={roomsImages.find((room) => room.type === selectedRoom)?.before || ""}
                    alt='image'
                    className='rounded-2xl'
                    fill
                />
            </div>
        </div>
    )
}

export default AIResultShowcase
