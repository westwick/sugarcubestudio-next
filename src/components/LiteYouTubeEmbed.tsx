"use client";

import { useState } from "react";

/**
 * Click-to-load YouTube embed. Shows a thumbnail and play button until the user
 * clicks, then loads the real iframe. This avoids:
 * - Feature Policy / Permissions-Policy console warnings from the iframe allow attribute
 * - Third-party cookie warnings from YouTube
 * - CSP warnings from YouTube's embed scripts
 * until the user actually chooses to play the video.
 */
export default function LiteYouTubeEmbed({
  videoId,
  title,
  className = "",
}: {
  videoId: string;
  title: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`;

  // Minimal allow list for when iframe loads; avoids "Feature Policy: Skipping unsupported feature name" noise
  const allow = "fullscreen; picture-in-picture; autoplay; encrypted-media";

  if (loaded) {
    return (
      <iframe
        className={`absolute inset-0 w-full h-full ${className}`.trim()}
        src={embedUrl}
        title={title}
        allow={allow}
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className={`absolute inset-0 w-full h-full flex items-center justify-center group cursor-pointer ${className}`.trim()}
      aria-label={title}
    >
      <img
        src={thumbnailUrl}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-red-600/90 text-white shadow-lg transition group-hover:bg-red-600 group-hover:scale-105">
        <svg
          className="h-8 w-8 ml-1"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
