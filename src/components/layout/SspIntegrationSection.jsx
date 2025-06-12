'use client';

import Image from 'next/image';

const sspLogos = [
  { src: '/assets/vistar.webp', alt: 'Vistar Media' },
  { src: '/assets/place-exchange.svg', alt: 'Place Exchange' },
  { src: '/assets/broadsign.webp', alt: 'Broadsign' },
  { src: '/assets/hivestack.webp', alt: 'Hivestack' },
  { src: '/assets/magnite.svg', alt: 'Magnite' },
];

export default function SspIntegrationSection() {
  return (
    <section className="py-16 px-4 md:px-20 bg-white text-black">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10">
        <div>
          <h2 className="text-[36px] font-bold mb-4 leading-snug">
            Dolphin Integrates With The Leading
            Supply-side Platforms (SSPs)
          </h2>
        </div>
        <div className="space-y-4 text-lg">
          <p>
            Dolphin <strong>seamlessly integrates</strong> with leading Supply-Side Platforms (SSPs), ensuring a
            smooth and efficient avenue for advertisers to access <strong>premium DOOH Ad inventory</strong>.
          </p>
          <p>
            This integration helps advertisers with easy planning, launching, and management of campaigns across its
            <strong> extensive screen network</strong>.
          </p>
          <p>
            By collaborating with prominent SSPs, Dolphin enhances the effectiveness of ad delivery, maximizing your
            <strong> brand&apos;s visibility</strong> to the <strong>right audiences</strong> at the right moment.
          </p>
        </div>
      </div>

      <div className="mt-[80px] flex flex-wrap justify-center items-center gap-8">
        {sspLogos.map((logo, index) => (
          <div key={index} className="relative w-auto">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={50}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
