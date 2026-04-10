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
          src="/uploaded/berlin_skyline.jpg" 
          alt="Berlin Skyline" 
          className="w-full h-full object-contain object-bottom dark:invert" 
        />
      </div>

      <div className="px-6 py-20 md:px-12 lg:px-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
            {/* Headshot */}
            <div className="relative mx-auto shrink-0 lg:mx-0 lg:w-80">
              <div className="relative h-64 w-56 overflow-hidden rounded-3xl border-2 border-border shadow-2xl md:h-80 md:w-72 lg:h-full lg:w-full">
                <img
                  src="/uploaded/profi-profil.jpg"
                  alt="Eivind Liland"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-3xl border-2 border-primary/20 md:-bottom-6 md:-right-6 md:h-40 md:w-40" />
              <div className="absolute -left-3 -top-3 -z-10 h-8 w-8 rounded-full bg-accent/40" />
            </div>

            {/* Content */}
            <div className="relative flex flex-1 flex-col justify-between text-center lg:text-left">

              <div className="relative z-10">
                <h1 className="text-balance text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                  Eivind Liland
                </h1>

                <p className="mt-1 text-xl font-medium text-primary md:text-2xl">
                  Parallel Accelerator Specialist
                </p>

                <div className="mt-8 max-w-2xl lg:mx-0">
                  <h2 className="inline-block border-b-2 border-accent pb-1 text-lg font-semibold">
                    Hardware & Software Consultant
                  </h2>
                  <p className="mt-4 text-pretty leading-relaxed text-foreground/80">
                    I work across the entire stack: from RTL design and verification to low-level software and parallel algorithms. Whether architecting out-of-order SIMT cores and parallel memory subsystems for AI and compute, or writing highly optimized GPU compute shaders and bare-metal rendering engines, I love the challenge of finding trade-offs that maximize throughput with minimal power.
                  </p>
                </div>
              </div>

              <div className="mt-12 flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-end lg:mt-0">
                <div className="pb-1 relative z-20">
                  <Button asChild size="lg" className="rounded-full shadow-lg transition-transform hover:scale-105">
                    <a href="#contact">Get in touch</a>
                  </Button>
                </div>
                
                {/* Availability Status Pill */}
                <div className="pb-1 relative z-20 select-none pointer-events-none">
                  <div className="inline-flex items-center gap-4 rounded-full border border-border/60 bg-background/60 px-4 py-2 text-sm text-foreground/80 shadow-sm backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 dark:text-emerald-500">
                        <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
                      </svg>
                      <span className="font-medium">Global Remote</span>
                    </div>
                    <div className="h-4 w-px bg-border"></div>
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
