const projects = [
  {
    title: "Project Name",
    category: "Hardware",
    description:
      "Brief description of the project and what was achieved. Replace with actual project details.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
  {
    title: "Project Name",
    category: "Software",
    description:
      "Brief description of the project and what was achieved. Replace with actual project details.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
  },
  {
    title: "Project Name",
    category: "RTL Design",
    description:
      "Brief description of the project and what was achieved. Replace with actual project details.",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
  },
]

export function Projects() {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-24">
      {/* Section accent line */}
      <div className="absolute left-6 top-0 h-px w-[calc(100%-3rem)] bg-gradient-to-r from-transparent via-border to-transparent md:left-12 md:w-[calc(100%-6rem)] lg:left-24 lg:w-[calc(100%-12rem)]" />

      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-12 w-1.5 rounded-full bg-accent" />
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Things I&apos;ve Built
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border-2 border-transparent bg-card shadow-sm transition-all hover:border-primary/20 hover:shadow-lg"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Category badge */}
                <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-card-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
