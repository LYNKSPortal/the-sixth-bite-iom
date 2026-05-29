"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const images = [
  "708345357_122113591244745440_2199551205051780291_n.jpg",
  "688824149_122109742010745440_5914503175046393282_n.jpg",
  "689353545_122110716380745440_366540252959685477_n.jpg",
  "694459431_122109752618745440_4497850610344960325_n.jpg",
  "702621121_122112095726745440_4742910413460175683_n.jpg",
  "702621123_122112095756745440_5071284249193951152_n.jpg",
  "702996129_122112095714745440_3128567690296679873_n.jpg",
  "703776651_122112695564745440_7702234441131313472_n.jpg",
  "704147921_122112695576745440_7509673315337575297_n.jpg",
  "705277047_122113591256745440_2776381173450473019_n.jpg",
  "706078218_122113362392745440_2640088751417966549_n.jpg",
  "707463823_122113752518745440_5770091284962882563_n.jpg",
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (index: number) => setLightboxIndex(index);
  const close = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, prev, next]);

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm tracking-widest text-[#c9a961] mb-4">OUR FOOD</div>
          <h2 className="text-4xl md:text-5xl font-light text-white">A taste of what&apos;s waiting</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {images.map((filename, index) => (
            <button
              key={filename}
              onClick={() => open(index)}
              className="relative aspect-square overflow-hidden group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a961]"
            >
              <Image
                src={`/${filename}`}
                alt="The 6th Bite dish"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-5 right-5 z-10 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 z-10 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Previous"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div
            className="relative w-full max-w-4xl max-h-[85vh] mx-16 md:mx-24"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/${images[lightboxIndex]}`}
              alt="The 6th Bite dish"
              width={1200}
              height={1200}
              className="w-full h-full object-contain max-h-[85vh]"
              sizes="(max-width: 1024px) 90vw, 80vw"
              priority
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 z-10 text-white/70 hover:text-white transition-colors p-2"
            aria-label="Next"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
