const expertise = [
  {
    title: "Parallel Architectures",
    description:
      "Compute architecture for GPUs, accelerators, and AI processors. Memory bandwidth walls, dataflow scheduling, keeping arithmetic units fed — I've been solving these across single-core to massively parallel systems since before they carried an AI label.",
  },
  {
    title: "Software Development",
    description:
      "From bare-metal C/C++ and assembly to GPU-accelerated Python — I work at every level of abstraction. Whether it's wringing cycles out of constrained hardware or writing algorithms for massively parallel systems, I can help.",
  },
  {
    title: "RTL Design",
    description:
      "Digital design in SystemVerilog. I write RTL with verification in mind from the start, with constrained-random testbenches alongside each module, so what I hand over is already substantially validated.",
  },
  {
    title: "Verification",
    description:
      "Verification from module-level constrained-random to system-level integration. UVM or light-weight testbench frameworks - at Swarm64 we ran a Verilator + C++ testbench flow. Custom silicon or FPGA.",
  },
]

export function ExpertiseGrid() {
  return (
    <section className="relative bg-card px-6 py-20 md:px-12 lg:px-24">
      {/* Decorative corner accents */}
      <div className="absolute left-6 top-6 h-16 w-16 border-l-2 border-t-2 border-primary/30 md:left-12 lg:left-24" />
      <div className="absolute bottom-6 right-6 h-16 w-16 border-b-2 border-r-2 border-primary/30 md:right-12 lg:right-24" />

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
              className="group relative rounded-xl border-2 border-transparent bg-background p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
            >
              {/* Card number accent */}
              <span className="absolute -top-3 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {['I', 'II', 'III', 'IV'][index]}
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
