export function Footer() {
  return (
    <footer className="relative px-6 py-12 md:px-12 lg:px-24">
      {/* Section accent line */}
      <div className="absolute left-6 top-0 h-px w-[calc(100%-3rem)] bg-linear-to-r from-transparent via-border to-transparent md:left-12 md:w-[calc(100%-6rem)] lg:left-24 lg:w-[calc(100%-12rem)]" />

      <div className="mx-auto flex max-w-5xl justify-center">
        <a
          href="/impressum.html"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline"
        >
          Impressum
        </a>
      </div>
    </footer>
  )
}
