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

      <div className="px-6 py-20 md:px-12 lg:px-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
            {/* Headshot */}
            <div className="relative mx-auto flex shrink-0 flex-col items-center w-56 md:w-72 lg:w-88 lg:mx-0">
              <div className="relative h-64 w-full overflow-hidden rounded-3xl border-2 border-border shadow-2xl md:h-80 lg:h-104">
                <img
                  src="/uploaded/profi-profil.jpg"
                  alt="Eivind Liland"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              
              <div className="relative -mt-5 z-10 flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-3 py-2 shadow-md md:px-4">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <span className="truncate text-xs font-medium text-muted-foreground text-center md:text-sm">
                  Available for remote & Berlin on-site projects
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
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
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  I work across the entire stack: from RTL design and verification to low-level software and parallel algorithms. Whether architecting out-of-order SIMT cores and parallel memory subsystems for AI and compute, or writing highly optimized GPU compute shaders and bare-metal rendering engines, I love the challenge of finding trade-offs that maximize throughput with minimal power.
                </p>
                <div className="mt-8 flex flex-col items-center sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="rounded-full shadow-lg transition-transform hover:scale-105">
                    <a href="#contact">Get in touch</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
