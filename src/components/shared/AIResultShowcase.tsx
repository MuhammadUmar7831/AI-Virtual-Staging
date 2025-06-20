'use client';
import React, { useRef, useState, useEffect } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const AIResultShowcase = () => {
    const [selectedRoom, setSelectedRoom] = useState<string>('Lounge');
    const [sliderX, setSliderX] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const roomTypes = ['Kitchen', 'Lounge', 'Bedroom', 'Living Room'];

    const roomsImages = [
        {
            type: 'Lounge',
            before: '/home/before-lounge.jpg',
            after: '/home/after-lounge.jpg',
        },
        {
            type: 'Kitchen',
            before: '/home/gallery1.jpg',
            after: '/home/client1.jpg',
        },
    ];

    useEffect(() => {
        setSliderX(0);
    }, [selectedRoom])

    useEffect(() => {
        const handleMove = (clientX: number) => {
            if (!isDragging.current || !containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = ((clientX - rect.left) / rect.width) * 100;
            setSliderX(Math.max(0, Math.min(100, x)));
        };

        const handleMouseMove = (e: MouseEvent) => {
            handleMove(e.clientX);
        };

        const handleTouchMove = (e: TouchEvent) => {
            handleMove(e.touches[0].clientX);
        };

        const stopDragging = () => {
            isDragging.current = false;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', stopDragging);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', stopDragging);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', stopDragging);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', stopDragging);
        };
    }, []);


    const currentRoom = roomsImages.find((room) => room.type === selectedRoom);

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
                            setSliderX(100); 
                        }}
                    >
                        {room}
                    </p>
                ))}
            </div>

            {/* <BeforeAfterSlider
                beforeImage='/after.png'
                afterImage='/before.jpg'
            /> */}
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
