'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import VectorDiagonal from '@/icons/VectorDiagonal';

const images = [
    { src: '/home/gallery3.jpg', alt: 'Living Room' },
    { src: '/home/gallery2.jpg', alt: 'Modern Bedroom' },
    { src: '/home/gallery1.jpg', alt: 'Office Setup' },
    { src: '/home/gallery3.jpg', alt: 'Living Room Again' },
    { src: '/home/gallery2.jpg', alt: 'Another Bedroom' },
];

export default function GalleryShowcase({color}: {color: string}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);


    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const containerRect = container.getBoundingClientRect();
            const centerX = containerRect.left + containerRect.width / 2;

            let closestIndex = 0;
            let closestDistance = Infinity;

            const items = container.querySelectorAll('.carousel-item');
            items.forEach((item, index) => {
                const itemRect = item.getBoundingClientRect();
                const itemCenterX = itemRect.left + itemRect.width / 2;
                const distance = Math.abs(centerX - itemCenterX);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveIndex(closestIndex);
        };

        handleScroll(); // initial check
        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <section className={`w-full py-16 bg-${color} overflow-hidden`}>
                <div className="text-center px-4 flex flex-col justify-center items-center">
                    <h2 className="text-white text-4xl md:text-[80px] font-[400]">
                        Designs that speak for themselves
                    </h2>
                    <p className="text-white text-lg md:text-2xl mt-4 max-w-3xl mx-auto">
                        Browse our AI-generated interiors and discover how smart design meets stunning aesthetics.
                    </p>
                    <button className="bg-[#D6DCFF] text-black px-8 py-4 rounded-xl mt-6 font-medium text-lg flex justify-center items-center gap-2 cursor-pointer">
                        Explore Gallery <VectorDiagonal stroke='black' />
                    </button>
                </div>
            </section>
            <div
                ref={containerRef}
                className={`flex overflow-x-auto justify-center items-center gap-5 snap-x snap-mandatory scrollbar-hide bg-${color} p-5`}
            >
                {images.map((src, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <div
                            key={index}
                            data-index={index}
                            className={`carousel-item flex-shrink-0 snap-center relative transition-transform duration-300 ease-in-out 
    ${isActive
                                    ? 'lg:w-[790px] lg:h-[562px] sm:w-[500px] sm:h-[350px] w-[300px] h-[200px] scale-100 z-20'
                                    : 'lg:w-[224px] lg:h-[366px] sm:w-[200px] sm:h-[250px] w-[100px] h-[150px] scale-90 z-10'
                                } rounded-xl overflow-hidden cursor-pointer`}
                            onClick={(e) => {
                                setActiveIndex(index);
                                // Scroll the clicked image into center
                                (e.currentTarget as HTMLElement).scrollIntoView({
                                    behavior: 'smooth',
                                    inline: 'center',
                                    block: 'nearest',
                                });
                            }}
                        >

                            <Image
                                src={src.src}
                                alt={`image-${index}`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl"
                                priority={index === 0}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}