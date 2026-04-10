const projects = [
  {
    category: "GPU Architecture",
    items: [
      "Designed out-of-order WARP scheduling logic for a mobile GPU core",
      "Built custom memory hierarchy for bandwidth-constrained AI accelerator",
      "Prototyped novel register file design reducing area by 30%",
    ],
  },
  {
    category: "RTL & Silicon",
    items: [
      "Full RTL implementation of a RISC-V vector extension subset",
      "UVM testbench infrastructure for multi-million gate SoC",
      "FPGA prototype of custom matrix multiply unit",
    ],
  },
  {
    category: "Software & Algorithms",
    items: [
      "GPU-accelerated computational fluid dynamics solver",
      "Custom shader compiler backend for proprietary GPU ISA",
      "Real-time signal processing pipeline on embedded DSP",
    ],
  },
  {
    category: "Systems & Integration",
    items: [
      "End-to-end verification environment for PCIe Gen4 controller",
      "Driver stack for custom AI inference accelerator",
      "Performance modeling framework for early-stage architecture exploration",
    ],
  },
]

export function ThingsBuilt() {
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

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                {group.category}
              </h3>
              <ul className="space-y-3 border-l-2 border-border pl-4">
                {group.items.map((item, index) => (
                  <li
                    key={index}
                    className="relative text-sm leading-relaxed text-muted-foreground before:absolute before:-left-[1.125rem] before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          These are placeholders — replace with your actual projects and accomplishments.
        </p>
      </div>
    </section>
  )
}
