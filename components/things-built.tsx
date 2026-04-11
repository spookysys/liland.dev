const projects = [
  {
    category: "Architecture",
    items: [
      "Microarchitecture for massively multicore FPGA processing platform",
      "Memory subsystem architecture for massively parallel processing platform",
      "Hierarchical tiler for mobile GPU — now ARM Mali, in billions of devices",
      "FPGA-based GPU prototype for Gameboy Advance",
      "Named inventor on five ARM Mali GPU patents",
    ],
  },
  {
    category: "Software",
    items: [
      "Vulkan drivers for ARM Mali (C / ARM / Linux / Android)",
      <><em>Texas</em> — real-time 3D in under 4,096 bytes on the first SIMT GPU. 1st place NVScene, Scene.org Award</>,
      <><em>Five Finger Discount</em> — 3D engine for Gameboy Advance (16 MHz ARM7, no GPU). Scene.org Award nominations</>,
      "Pump geometry design tools deployed in propellant systems for launch vehicles and zero-emission aircraft",
    ],
  },
  {
    category: "RTL Design",
    items: [
      "Out-of-order 16-lane WARP core",
      "Fixed-point and floating-point arithmetic units",
      "Coherent cache hierarchy supporting thousands of out-of-order requests",
      "High-bandwidth 2D routing network for out-of-order cache system",
      "Subpixel triangle rasterizer for FPGA-based GPU",
    ],
  },
  {
    category: "Verification",
    items: [
      "GPU shader engine, texture mapper, tile buffer, and out-of-order caches",
      "Functional verification of parallel processor core, arithmetic units, and interconnect",
      "Real-time 3D tech demos for GPU marketing and pre-silicon validation on FPGA",
      "Design and verification CI pipeline for hardware startup",
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
      </div>
    </section>
  )
}