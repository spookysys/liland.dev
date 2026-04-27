export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background px-6 pt-6 pb-12 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-5xl justify-center">
        <a
          href="/impressum.html"
          className="text-sm font-medium text-muted-foreground underline underline-offset-4 decoration-muted-foreground/40 transition-colors hover:text-foreground hover:decoration-foreground"
        >
          Impressum & Privacy Policy
        </a>
      </div>
    </footer>
  )
}
