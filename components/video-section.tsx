"use client"

import { useState } from "react"

const VIDEO_ID = "QjVw1Gcrhks"

export function VideoSection() {
  const [consented, setConsented] = useState(false)

  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-24">
      {/* Section accent line */}
      <div className="absolute left-6 top-0 h-px w-[calc(100%-3rem)] bg-gradient-to-r from-transparent via-border to-transparent md:left-12 md:w-[calc(100%-6rem)] lg:left-24 lg:w-[calc(100%-12rem)]" />

      <div className="mx-auto max-w-2xl">
        <div className="aspect-video overflow-hidden rounded-lg border bg-card">
          {consented ? (
            <iframe
              className="h-full w-full bg-card"
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
              className="group relative flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center transition-colors hover:bg-card/70"
              aria-label="Load and play YouTube video"
            >
              <img
                src={`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-30 transition-opacity group-hover:opacity-40"
              />
              <div className="relative z-10 flex flex-col items-center gap-3">
                <svg
                  className="h-16 w-16 text-foreground opacity-80 transition-opacity group-hover:opacity-100"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
                <p className="max-w-md text-sm text-muted-foreground">
                  Click to load the video from YouTube. This will establish a connection to
                  Google's servers (transmitting your IP address and possibly setting cookies
                  or local storage). See the{" "}
                  <a
                    href="/impressum.html"
                    className="underline underline-offset-2 hover:text-foreground"
                    onClick={(e) => e.stopPropagation()}
                  >
                    privacy notice
                  </a>{" "}
                  for details.
                </p>
                <span className="rounded-md border border-border bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur">
                  Load video
                </span>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
