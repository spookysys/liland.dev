"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

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

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <Button asChild size="lg" className="rounded-full shadow-lg transition-transform hover:scale-105">
            <a href="mailto:hello@liland.dev">Get in touch</a>
          </Button>

          {/* Availability Status Pill */}
          <a
            href="mailto:hello@liland.dev"
            className="inline-flex h-10 max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full border border-border/60 bg-background/60 px-6 text-sm text-foreground/80 shadow-sm backdrop-blur-md"
          >
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 dark:text-emerald-500">
                <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
              </svg>
              <span className="font-medium">Global Remote</span>
            </div>
            <div className="hidden h-4 w-px bg-border sm:block"></div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 dark:text-emerald-500">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="font-medium">On-site Berlin</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
