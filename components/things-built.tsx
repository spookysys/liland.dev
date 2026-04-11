const projects = [
  {
    category: "Architecture",
    items: [
      "System- and microarchitecture for high-density massively multicore FPGA processing platform",
      "Architecture design of hierarchical tiler for mobile GPU — now ARM Mali, shipping in billions of devices",
      "Prototype FPGA-based GPU architecture for Gameboy Advance",
    ],
  },
  {
    category: "RTL Design",
    items: [
      "Out-of-order 16-lane WARP core with fixed-point and floating-point arithmetic units",
      "Multi-level coherent cache hierarchy supporting thousands of outstanding out-of-order requests",
      "High-bandwidth 2D data routing network for massively out-of-order coherent cache system",
      "High-density subpixel triangle rasterizer for prototype FPGA-based GPU",
    ],
  },
  {
    category: "Verification",
    items: [
      "Verification, debugging, and bug-fixing across GPU shader engine, texture mapper, tile buffer, and out-of-order caches",
      "Real-time 3D game-style tech demos for GPU marketing and pre-silicon validation — visual quality beyond what audiences expected from shipping silicon, running on FPGA at a fraction of final clock speed",
      "Hardware design and verification CI pipeline for FPGA-based startup",
    ],
  },
  {
    category: "Software",
    items: [
      "Vulkan GPU drivers for ARM Mali series (C / ARM / Linux / Android)",
      <><em>Texas</em> — award-winning 4K intro on the first SIMT GPU (GeForce 8): fully directed real-time 3D with procedural geometry, lighting, and audio in under 4,096 bytes (1st place NVScene, Scene.org Award)</>,
      <>Real-time 3D rendering engines for Gameboy Advance (16 MHz ARM7, no GPU, no FPU) including <em>Five Finger Discount</em>, nominated for Scene.org Awards in best demo and best effects</>,
      "Parametric design and optimization tools for centrifugal pump geometry — deployed in propellant systems for zero-emission aircraft and space vehicles",
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

        <p className="mt-10 text-sm italic text-muted-foreground">
          Named inventor on five patents from work on the ARM Mali GPU.
        </p>
      </div>
    </section>
  )
}
