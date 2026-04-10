const expertise = [
  {
    title: "Parallel Architectures",
    description:
      "Compute architecture for GPUs, accelerators, and AI processors. The core problems in modern AI hardware — memory bandwidth walls, dataflow scheduling, keeping arithmetic units fed — are problems I've been working on since before they had an AI label. That covers systems from single embedded processors to thousands of parallel execution units. Available for hands-on design or high-level advisory.",
  },
  {
    title: "Software Development",
    description:
      "I've built software at every level of abstraction — from bare-metal assembly and GPU shaders to GPU-accelerated scientific computing and optimization in Python. Whether the problem is wringing cycles out of constrained hardware or designing algorithms for massively parallel systems, I can help.",
  },
  {
    title: "RTL Design",
    description:
      "Digital design in SystemVerilog. I write RTL with verification in mind from the start, with constrained-random testbenches alongside each module, so what I hand over is already substantially validated.",
  },
  {
    title: "Verification",
    description:
      "UVM-based verification from module-level constrained-random to system-level integration. If you're building custom silicon or FPGA systems and need verification methodology or execution, I can step in at any level.",
  },
]

export function ExpertiseGrid() {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-24">
      {/* Section accent line */}
      <div className="absolute left-6 top-0 h-px w-[calc(100%-3rem)] bg-gradient-to-r from-transparent via-border to-transparent md:left-12 md:w-[calc(100%-6rem)] lg:left-24 lg:w-[calc(100%-12rem)]" />

      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-12 w-1.5 rounded-full bg-primary" />
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What I Do
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {expertise.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-xl border-2 border-transparent bg-card p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
            >
              {/* Card number accent */}
              <span className="absolute -top-3 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {index + 1}
              </span>

              <h3 className="text-lg font-bold text-card-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 scale-x-0 bg-accent transition-transform group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
