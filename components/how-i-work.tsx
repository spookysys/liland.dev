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
                I partner with teams on a contract basis, billed hourly — whether that means short-term consulting, extended project work, or strategic advisory. 
              </p>
              <p>
                I'm available for remote work globally, or on-site in the Berlin area. I am always happy to start with a quick conversation to find the engagement model that best suits your needs.
              </p>
            </div>
            
            <div className="mt-auto pt-8">
              <div className="rounded-2xl border bg-background p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Ready to talk?
                </h3>
                <p className="mb-6 text-base text-muted-foreground">
                  From high-level system design to hands-on coding and verification, let's discuss how I can help accelerate your next project.
                </p>
                <Button asChild size="lg" className="h-14 w-full rounded-xl text-lg font-semibold shadow-lg transition-all hover:scale-[1.02] sm:w-auto sm:px-10">
                  <a href="mailto:hello@liland.dev">Get in Touch</a>
                </Button>
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
