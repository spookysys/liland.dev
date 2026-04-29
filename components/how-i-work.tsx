import { Button } from "./ui/button"

export function HowIWork() {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-24 bg-muted/30">
      {/* Section accent line */}
      <div className="absolute left-6 top-0 h-px w-[calc(100%-3rem)] bg-gradient-to-r from-transparent via-border to-transparent md:left-12 md:w-[calc(100%-6rem)] lg:left-24 lg:w-[calc(100%-12rem)]" />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col h-full">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-12 w-1.5 rounded-full bg-accent" />
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                How I Work
              </h2>
            </div>

            <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I partner with teams on a contract basis, billed hourly — whether that means short-term consulting or extended project work. 
              </p>
              <p>
                I'm available for remote work globally, or on-site in the Berlin area. Happy to start with a short call to see if it's a fit.
              </p>
            </div>
            
            <div className="mt-auto pt-8">
              <div className="rounded-2xl border bg-background p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Ready to talk?
                </h3>
                <p className="mb-6 text-base text-muted-foreground">
                  If you&apos;re designing hardware — or developing software for a system with massively out-of-order parallel compute and coherent multi-level memory hierarchies — let&apos;s talk.
                </p>
                <div className="flex items-center gap-3">
                  <Button asChild size="lg" className="h-14 rounded-xl text-lg font-semibold shadow-lg transition-all hover:scale-[1.02] sm:px-10">
                    <a href="mailto:hello@liland.dev">Get in Touch</a>
                  </Button>
                  <a
                    href="https://www.linkedin.com/in/eivlil01"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-border/60 bg-background/60 text-foreground/70 shadow-sm transition-colors hover:bg-accent hover:text-foreground"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-4/3 w-full h-full overflow-hidden rounded-3xl border-4 border-muted shadow-2xl lg:aspect-auto">
            <img 
              src="/images/berlin-photo.jpg" 
              alt="Berlin city view" 
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
