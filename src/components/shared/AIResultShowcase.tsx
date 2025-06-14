'use client';
import LeftArrow from '@/icons/LeftArrow';
import RightArrow from '@/icons/RightArrow';
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';

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
                            ? 'bg-[#2C2F40] px-6 py-[6px] text-white rounded-[15px]'
                            : ''
                            } text-[#737373] md:text-[24px] text-[18px] font-normal cursor-pointer`}
                        onClick={() => {
                            setSelectedRoom(room);
                            setSliderX(100); // Reset to fully show "before" image
                        }}
                    >
                        {room}
                    </p>
                ))}
            </div>

            <div
                className="w-full h-[604px] relative mx-auto my-8 rounded-4xl"
                ref={containerRef}
            >
                {/* AFTER image (bottom, always fully visible) */}
                <Image
                    src={currentRoom?.after || ''}
                    alt="after"
                    fill
                    className="object-cover rounded-2xl"
                />

                {/* BEFORE image (top, controlled by sliderX width) */}
                <div
                    className="absolute top-0 right-0 h-full overflow-hidden z-10 rounded-2xl"
                    style={{ width: `${100 - sliderX}%` }}
                >
                    <Image
                        src={currentRoom?.before || ''}
                        alt="before"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Drag handle */}
                <div
                    className="absolute top-0 bottom-0 z-100 rounded-4xl flex justify-center items-center"
                    style={{ left: `${sliderX}%`, transform: 'translateX(-50%)' }}
                >
                    <div
                        className="h-[100%] w-[4px] bg-white shadow-lg cursor-ew-resize relative z-100"
                        onMouseDown={() => (isDragging.current = true)}
                        onTouchStart={() => (isDragging.current = true)}
                    >
                        <button className="absolute top-1/2 left-[-40px] -translate-y-1/2 bg-white px-2 py-[27px] rounded-full shadow-xl flex items-center gap-2 z-100 cursor-pointer">
                            <LeftArrow />
                            <p>Drag</p>
                            <RightArrow />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIResultShowcase;
