import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
          Get in Touch
        </h2>
        
        <p className="mb-8 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          If you&apos;re working on something in this space and need engineering 
          support — I&apos;d love to hear what you&apos;re building.
        </p>
        
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Button asChild size="lg" className="font-medium">
            <a href="mailto:eivind@liland.dev">Get in touch</a>
          </Button>
          
          <a 
            href="mailto:eivind@liland.dev" 
            className="text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
          >
            eivind@liland.dev
          </a>
        </div>
      </div>
    </section>
  )
}
