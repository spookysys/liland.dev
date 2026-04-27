import { Button } from "./ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 bg-card">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-y-1/4 -translate-x-1/4 rounded-full bg-accent/10 blur-3xl" />
      </div>

      {/* Decorative corner accents */}
      <div className="absolute left-6 top-6 h-16 w-16 border-l-2 border-t-2 border-primary/30 md:left-12 lg:left-24" />
      <div className="absolute bottom-6 right-6 h-16 w-16 border-b-2 border-r-2 border-primary/30 md:right-12 lg:right-24" />

      {/* Background Skyline Image (fitted within outer frames) */}
      <div className="absolute top-6 bottom-6 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 -z-10 pointer-events-none select-none mix-blend-multiply dark:mix-blend-screen opacity-[0.07]">
        <img 
          src="/images/berlin_skyline.jpg" 
          alt="Berlin Skyline" 
          className="w-full h-full object-contain object-bottom dark:invert" 
        />
      </div>

      <div className="px-6 py-20 md:px-12 lg:px-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Headshot */}
            <div className="relative mx-auto w-fit shrink-0 pb-5 pr-5 lg:mx-0 lg:w-80 lg:pb-0 lg:pr-0 lg:self-stretch">
              <div className="relative h-64 w-56 overflow-hidden rounded-3xl border-2 border-border shadow-2xl md:h-80 md:w-72 lg:absolute lg:inset-0 lg:h-auto lg:w-auto">
                <img
                  src="/images/profi-profil4.jpg"
                  alt="Eivind Liland"
                  className="h-full w-full object-cover object-[50%_33%]"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-3xl border-2 border-primary/20 md:-bottom-6 md:-right-6 md:h-40 md:w-40" />
              <div className="absolute -left-3 -top-3 -z-10 h-8 w-8 rounded-full bg-accent/40" />
            </div>

            {/* Content */}
            <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center gap-8 text-center lg:mx-0 lg:max-w-none lg:flex-1 lg:items-start lg:text-left">
              <div className="relative z-10 flex flex-col items-center lg:items-start">
                <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Eivind Liland
                </h1>

                <p className="mt-1 text-lg font-medium text-primary sm:text-xl md:text-2xl">
                  Parallel Accelerator Specialist
                </p>

                <div className="mx-auto mt-8 max-w-2xl lg:mx-0">
                  <h2 className="inline-block border-b-2 border-accent pb-1 text-lg font-semibold">
                    Hardware & Software Consultant
                  </h2>
                  <p className="mt-4 text-pretty leading-relaxed text-foreground/80">
                    I work across the stack - from RTL design and verification to low-level software and parallel algorithms. Whether architecting out-of-order SIMT cores and parallel memory subsystems for AI and compute, or writing optimized GPU compute shaders and bare-metal rendering engines, I love the challenge of finding trade-offs that maximize throughput with minimal power.
                  </p>
                </div>
              </div>

              <div className="relative z-20 mt-2 flex flex-col items-center gap-4 sm:gap-5 lg:mt-0 lg:flex-row lg:items-end lg:justify-between">
                <div className="pb-1">
                  <Button asChild size="lg" className="rounded-full shadow-lg transition-transform hover:scale-105">
                    <a href="mailto:hello@liland.dev">Get in touch</a>
                  </Button>
                </div>

                {/* Availability Status Pill */}
                <div className="max-w-full select-none pointer-events-none pb-1">
                  <div className="inline-flex h-10 max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full border border-border/60 bg-background/60 px-6 text-sm text-foreground/80 shadow-sm backdrop-blur-md">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
