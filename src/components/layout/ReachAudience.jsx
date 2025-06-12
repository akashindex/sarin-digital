'use client';

import Image from 'next/image';

export default function ReachAudience() {
    return (
        <section className="w-full py-16 bg-[#f5f5f5]">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <h2 className="text-3xl text-black md:text-5xl font-bold text-center">
                    Reach Local Audiences Nationally
                </h2>
                <p className="text-center text-lg mt-2 mb-10 text-black">
                    3500+ screens and counting
                </p>

                {/* Flexbox layout */}
                <div className="flex flex-col md:flex-row gap-8 w-full items-center">
                    <div className="relative w-full h-[400px]">
                        <Image
                            src="/assets/map-image.webp"
                            alt="Map with screen locations"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-[50%]">
                        <h3 className="text-black text-[34px] font-bold mb-4">
                            DOOH screens across the United States
                        </h3>
                        <p className="text-black">
                            Dolphin's DOOH screens are strategically deployed across cities
                            in the United States, covering 90 DMAs. Advertise in major urban
                            centers like New York, California's tech hub, and the political
                            prominence of Washington, D.C., as well as financial hubs such as
                            Chicago, Miami, and Dallas. Reach audiences in culturally rich
                            places like New Orleans, the high-tech corridors of Silicon
                            Valley, historical Boston, and the entertainment capital of Los
                            Angeles.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
