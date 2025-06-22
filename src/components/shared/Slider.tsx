'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import { useState } from 'react';

const images = [
  { src: '/home/gallery3.jpg', alt: 'Living Room' },
  { src: '/home/gallery2.jpg', alt: 'Modern Bedroom' },
  { src: '/home/gallery1.jpg', alt: 'Office Setup' },
  { src: '/home/gallery2.jpg', alt: 'Office Setup' },
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full py-10 h-[700px]">
      <Swiper
        slidesPerView={3}
        centeredSlides
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Navigation]}
        loop
      >
        {images.map((item, key) => {
          const isActive = key === activeIndex;
          return (
            <SwiperSlide key={key}
            >
              <Image
                src={item.src}
                alt={item.alt}
                className={`object-cover rounded-xl transition-all ${isActive ? 'lg:w-[790px] lg:h-[560px]' : 'lg:w-60 lg:h-96 mt-24'}  mx-auto`}
                width={1000}
                height={1000}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
