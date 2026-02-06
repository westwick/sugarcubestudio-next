"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  altPrefix: string;
  /** Aspect ratio for each slide: e.g. "video" (16/9), "9/16" for portrait */
  aspectRatio?: "video" | "9/16" | "square";
  className?: string;
}

export default function ImageCarousel({
  images,
  altPrefix,
  aspectRatio = "video",
  className = "",
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  const aspectClass =
    aspectRatio === "9/16"
      ? "aspect-[9/16]"
      : aspectRatio === "square"
        ? "aspect-square"
        : "aspect-video";

  return (
    <div
      className={`relative ${className}`}
      dir="ltr"
    >
      {/* Image container - full width */}
      <div
        className="relative w-full overflow-hidden rounded-xl border border-border bg-section-alt"
        dir="ltr"
      >
        <div
          className="flex flex-row transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full"
              style={{ minWidth: "100%" }}
            >
              <div className={`relative w-full h-full ${aspectClass}`}>
                <Image
                  src={src}
                  alt={`${altPrefix} ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons - overlaying the image */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-white bg-black/50 backdrop-blur-sm hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next image"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-white bg-black/50 backdrop-blur-sm hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
        >
          <ChevronRight className="w-5 h-5" aria-hidden />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
