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
      className={`relative flex items-center gap-3 flex-row ${className}`}
      dir="ltr"
    >
      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous image"
        className="flex-shrink-0 rounded-full p-2 text-foreground bg-card border border-border hover:bg-section-alt focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
      >
        <ChevronLeft className="w-6 h-6" aria-hidden />
      </button>

      <div
        className="relative flex-1 min-w-0 overflow-hidden rounded-xl border border-border bg-section-alt"
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
      </div>

      <button
        type="button"
        onClick={goNext}
        aria-label="Next image"
        className="flex-shrink-0 rounded-full p-2 text-foreground bg-card border border-border hover:bg-section-alt focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
      >
        <ChevronRight className="w-6 h-6" aria-hidden />
      </button>
    </div>
  );
}
