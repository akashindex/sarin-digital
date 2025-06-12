'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

const images = [
    '/assets/slider-1.webp',
    '/assets/slider-2.webp',
    '/assets/slider-3.webp',
    '/assets/slider-4.webp',
    '/assets/slider-5.webp',
    '/assets/slider-6.webp',
];

export default function AdSlider() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperReady, setSwiperReady] = useState(false);

    useEffect(() => {
        setSwiperReady(true);
    }, []);

    return (
        <section className="bg-white py-10">
            <div className="w-[90%] max-w-[1200px] mx-auto relative">
                {/* Swiper */}
                {swiperReady && (
                    <Swiper
                        modules={[Navigation]}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        slidesPerView={1.2}
                        spaceBetween={30}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="pb-10"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className={`rounded-[20px] overflow-hidden border-4 border-[#3ba1e1] bg-white shadow-md h-full transition-all duration-300 ${index % 2 === 1 ? 'md:mt-12' : 'md:mt-0'
                                        }`}
                                >
                                    <div className="rounded-[16px] overflow-hidden">
                                        <Image
                                            src={img}
                                            alt={`Ad ${index + 1}`}
                                            width={500}
                                            height={500}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
                {/* Navigation Arrows */}
                <div className="flex justify-center gap-10 mb-8 mt-[52px]">
                    {/* Prev Button */}
                    <button
                        ref={prevRef}
                        className="cursor-pointer select-none hover:scale-110 transition"
                    >
                        <svg
                            className="w-8 h-8"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                                fill="#3a95c2"
                            />
                        </svg>
                    </button>

                    {/* Next Button (Flipped version) */}
                    <button
                        ref={nextRef}
                        className="cursor-pointer select-none hover:scale-110 transition"
                    >
                        <svg
                            className="w-8 h-8 rotate-180"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                                fill="#3a95c2"
                            />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
}
