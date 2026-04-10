import { Button } from "./ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-y-1/4 -translate-x-1/4 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="px-6 py-20 md:px-12 lg:px-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            {/* Headshot */}
            <div className="relative mx-auto shrink-0 lg:mx-0">
              <div className="relative h-52 w-48 overflow-hidden rounded-2xl border-4 border-primary/20 shadow-xl md:h-60 md:w-56 lg:h-72 lg:w-64">
                {/* Replace this src with your actual headshot */}
                <img
                  src="/uploaded/profi-profil.jpg"
                  alt="Eivind Liland"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-xl border-2 border-primary/30" />
              <div className="absolute -left-2 -top-2 h-6 w-6 rounded-full bg-accent" />
              {/* Availability badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-background px-3 py-1 shadow-md">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                <span className="whitespace-nowrap text-xs font-medium text-emerald-700">Available for projects</span>
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
                  I work across the stack: Algorithms, coding, design and verification. From out-of-order SIMT cores and parallel coherent memory for graphics, compute, or AI inference, I love the challenge of finding trade-offs that maximize throughput with minimal power. I am available for projects on location in Berlin, or worldwide online.
                </p>
                <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row lg:justify-start">
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
