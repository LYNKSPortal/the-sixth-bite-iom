"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";

interface ImageSliderProps {
  images: string[];
  alt: string;
}

export default function ImageSlider({ images, alt }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, prev, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const multi = images.length > 1;

  return (
    <>
      <div
        className="relative w-full aspect-square overflow-hidden rounded-sm group"
        onTouchStart={multi ? onTouchStart : undefined}
        onTouchEnd={multi ? onTouchEnd : undefined}
      >
        <button
          className="absolute inset-0 w-full h-full cursor-pointer z-10"
          onClick={() => setLightbox(true)}
          aria-label="View fullscreen"
        />

        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${alt}${multi ? ` — photo ${i + 1}` : ""}`}
            fill
            className={`object-cover transition-opacity duration-500 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ))}

        {multi && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white rounded-full transition-all
                         opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
              aria-label="Previous image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white rounded-full transition-all
                         opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
              aria-label="Next image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === current ? "bg-white w-4" : "bg-white/50"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors p-2 z-10"
            onClick={() => setLightbox(false)}
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {multi && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div
            className="relative w-[90vw] h-[90vw] max-w-[80vh] max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`${alt}${multi ? ` — photo ${i + 1}` : ""}`}
                fill
                className={`object-contain transition-opacity duration-500 ease-in-out ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
                sizes="90vw"
              />
            ))}
          </div>

          {multi && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {multi && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    i === current ? "bg-white w-6" : "bg-white/40 w-2"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
