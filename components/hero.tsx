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
            <div className="relative mx-auto shrink-0 lg:mx-0">
              <div className="relative h-64 w-56 overflow-hidden rounded-3xl border-2 border-border shadow-2xl md:h-80 md:w-72 lg:h-104 lg:w-88">
                <img
                  src="/uploaded/profi-profil.jpg"
                  alt="Eivind Liland"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-3xl border-2 border-primary/20 md:-bottom-6 md:-right-6 md:h-40 md:w-40" />
              <div className="absolute -left-3 -top-3 -z-10 h-8 w-8 rounded-full bg-accent/40" />
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
                <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="rounded-full shadow-lg transition-transform hover:scale-105">
                    <a href="#contact">Get in touch</a>
                  </Button>
                  
                  <div className="flex flex-col items-center sm:items-start">
                    <p className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5 shrink-0">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      </span> 
                      Remote (Global) & On-site (Berlin)
                    </p>
                    {/* Discreet Berlin Skyline visual */}
                    <svg className="mt-0.5 h-[1.125rem] w-auto opacity-30 invert dark:invert-0" viewBox="0 0 100 24" fill="currentColor" aria-hidden="true">
                      {/* Base/Ground */}
                      <rect x="0" y="22" width="100" height="2" />
                      {/* Various buildings */}
                      <rect x="5" y="14" width="8" height="8" />
                      <rect x="16" y="10" width="10" height="12" />
                      <rect x="28" y="16" width="6" height="6" />
                      <rect x="68" y="12" width="12" height="10" />
                      <rect x="83" y="15" width="10" height="7" />
                      <rect x="95" y="18" width="5" height="4" />
                      {/* Famous TV Tower (Fernsehturm) styling for immediate Berlin recognition */}
                      <path d="M48 22V8h-1V6a2.5 2.5 0 0 1-1.5-2A2.5 2.5 0 0 1 47 1.5V0h2v1.5a2.5 2.5 0 0 1 1.5 2.5A2.5 2.5 0 0 1 49 6v2h-1v14h-2z" />
                      <rect x="54" y="18" width="6" height="4" />
                      <rect x="62" y="8" width="4" height="14" />
                    </svg>
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
