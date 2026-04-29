"use client"

import { useState } from "react"

const VIDEO_ID = "QjVw1Gcrhks"

export function VideoSection() {
  const [consented, setConsented] = useState(false)

  return (
    <section className="relative bg-card px-6 py-20 md:px-12 lg:px-24">
      {/* Decorative corner accents */}
      <div className="absolute left-6 top-6 h-16 w-16 border-l-2 border-t-2 border-primary/30 md:left-12 lg:left-24" />
      <div className="absolute bottom-6 right-6 h-16 w-16 border-b-2 border-r-2 border-primary/30 md:right-12 lg:right-24" />

      <div className="mx-auto max-w-2xl">
        <div className="aspect-video overflow-hidden rounded-lg border bg-background">
          {consented ? (
            <iframe
              className="h-full w-full bg-background"
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&vq=hd1080&hd=1`}
              title="Video introduction"
              allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setConsented(true)}
              className="group relative flex h-full w-full items-center justify-center"
              aria-label="Load and play YouTube video"
            >
              <img
                src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg` }}
              />
              <svg
                className="relative z-10 h-16 w-16 text-white drop-shadow-lg opacity-90 transition-transform group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
            </button>
          )}
        </div>
        {!consented && (
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Loads from YouTube — Google will receive your IP.{" "}
            <a href="/impressum.html" className="underline underline-offset-2 hover:text-foreground">
              Privacy notice
            </a>
          </p>
        )}
      </div>
    </section>
  )
}
