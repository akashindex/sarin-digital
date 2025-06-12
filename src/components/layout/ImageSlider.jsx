'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const slides = [
    {
        src: "/assets/slide-image-1.jpeg",
        text: "One of the Fastest Growing DOOH Media Networks in the USA!",
        paragraph: "3500+ SCREENS | 90+ DMAs",
    },
    {
        src: "/assets/slide-image-2.png",
        text: "3500+ Digital Screens across 90+ DMAs",
        paragraph: "1000+ LOCATIONS | 50+ STATES",
    },
    {
        src: "/assets/slide-image-3.png",
        text: "Located in Convenience Stores, Grocery Stores, Pharmacies, Urban Panels & Casual Dining",
        paragraph: "24/7 AVAILABILITY | NATIONWIDE",
    },
    {
        src: "/assets/slide-image-4.png",
        text: "Find us on Vistar, Place Exchange, Broadsign, Hivestack and Magnite",
        paragraph: "24/7 AVAILABILITY | NATIONWIDE",
    },
];

export default function ImageSlider() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="relative w-full mx-auto">
            {/* Custom Nav Buttons */}
            {/* Prev Button */}
            <div
                ref={prevRef}
                className="absolute top-1/2 left-4 z-20 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 transition-colors duration-200 rounded-full flex items-center justify-center cursor-pointer"
            >
                <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </div>

            {/* Next Button */}
            <div
                ref={nextRef}
                className="absolute top-1/2 right-4 z-20 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 transition-colors duration-200 rounded-full flex items-center justify-center cursor-pointer"
            >
                <svg
                    className="w-4 h-4 text-white rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </div>

            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    // Attach navigation refs
                    if (typeof swiper.params.navigation !== 'boolean') {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }
                }}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[100vh]">
                            <Image
                                src={slide.src}
                                alt={slide.text || `Slide ${index + 1}`}
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)] px-6">
                                <div className="w-full max-w-3xl text-center">
                                    <h2 className="text-white text-[32px] sm:text-[48px] md:text-[60px] font-bold leading-tight mb-4">
                                        {slide.text}
                                    </h2>
                                    <p className="text-white text-lg sm:text-xl font-medium">
                                        {slide.paragraph}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
