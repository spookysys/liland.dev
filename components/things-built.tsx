"use client"

import { useState } from "react"

const projects = [
  {
    category: "Architecture",
    items: [
      {
        text: "Massively multicore FPGA processing platform",
        detail: "Chief architect, Swarm64, 2012–2016. A fabric of many 4-core clusters sharing L1 cache and an ALU pool per cluster. Each core ran barrel-threaded SIMT warps with scoreboarded out-of-order completion. Out-of-order at every level — barrel threading, scoreboarding, caches, interconnect — sustaining thousands of in-flight transactions across the fabric. Built on Xilinx FPGAs.",
      },
      {
        text: "2D interconnect for manycore processor",
        detail: "Lead architect, Swarm64, 2012–2016. High-bandwidth topology chosen for FPGA routing efficiency, sustaining thousands of simultaneous out-of-order requests across the multicore fabric.",
      },
      {
        text: "Hierarchical tiler for mobile GPU — now ARM Mali, in billions of devices",
        detail: "Co-developed architecture with new ARM Cambridge team, 2007–2009. Spent half a year in Cambridge helping establish the team post-acquisition. Key stage in tile-based deferred rendering — sorting and binning geometry into screen-space tiles before rasterization.",
      },
      {
        text: "Five ARM Mali GPU patents",
        detail: "Co-inventor. Falanx/ARM, 2003–2009. Patents covering graphics processing systems, data compression, and rendering pipeline innovations.",
      },
      {
        text: "FPGA-based GPU for Gameboy Advance (not completed)",
        detail: "Sole developer, Personal project, ~2005. A GPU on an FPGA inside a GBA cartridge — the console has no graphics hardware beyond a simple 2D sprite/tile engine.",
      },
    ],
  },
  {
    category: "Software",
    items: [
      {
        text: "Pump geometry tools for rocket engines and zero-emission aircraft",
        detail: "Co-developer, Orbital Machines, 2019–2022. Python tools for parametric generation and optimization of centrifugal pump impeller and volute geometry.",
      },
      {
        text: "Vulkan drivers for ARM Mali",
        detail: "Team contributor. ARM, 2017–2018. Low-level driver development for the Mali GPU series.",
      },
      {
        text: <><em>Texas</em> — real-time 3D in under 4,096 bytes. 1st place NVScene, Scene.org Award</>,
        detail: "Coder, Keyboarders, 2008. Built on the then-new GeForce 8 — NVIDIA's first SIMT architecture with a unified shader pipeline. DX10 geometry shaders, screen-space ambient occlusion, procedural geometry, audio remixed from a Vista system sample. Pouët all-time #42.",
      },
      {
        text: <><em>Five Finger Discount</em> — 3D engine for Gameboy Advance. Scene.org Award nominations</>,
        detail: "3D engine programmer (two-person coding team). Shitfaced Clowns, 2005–2006. Software rendering, fixed-point math, everything from scratch — no OS, no libraries. 2nd place Breakpoint 2006. Nominated for Scene.org Awards in best demo and best effects.",
      },
    ],
  },
  {
    category: "RTL Design",
    items: [
      {
        text: "Out-of-order 16-lane WARP core",
        detail: "Lead designer. Swarm64, 2012–2016. RISC SIMT core in SystemVerilog with barrel-threaded warps and scoreboarded out-of-order issue.",
      },
      {
        text: "Cluster-shared arithmetic units",
        detail: "Lead designer. Swarm64, 2012–2016. Fixed- and floating-point ALU pool shared across the four cores in each cluster.",
      },
      {
        text: "2D interconnect and cache hierarchy",
        detail: "Lead designer on interconnect, contributor on caches. Swarm64, 2012–2016. SystemVerilog implementation of the mesh interconnect; design and validation support on the L1/L2 hierarchy.",
      },
      {
        text: "Subpixel triangle rasterizer for FPGA-based GPU",
        detail: "Personal project, ~2005. High-density, high-bandwidth design for the GBA FPGA GPU prototype.",
      },
    ],
  },
  {
    category: "Verification",
    items: [
      {
        text: "Out-of-order WARP cores, cluster-shared ALUs, and 2D interconnect",
        detail: "Verification engineer. Swarm64, 2012–2016. Functional verification of the parallel processor fabric I helped design.",
      },
      {
        text: "CI pipeline for hardware startup",
        detail: "Swarm64, 2012–2016. Automated coverage tracking, regression, build, and validation flows built on open-source tooling (Verilator-based).",
      },
      {
        text: "GPU shader engine, texture mapper, tile buffer, and out-of-order caches",
        detail: "Verification engineer. Falanx/ARM, 2003–2009. Verification, debugging, and bug-fixing across the Mali GPU pipeline: VLIW shader processor, texture mapper, tile buffer with resolver, and massively out-of-order caches.",
      },
      {
        text: "Real-time 3D tech demos for GPU marketing and pre-silicon validation",
        detail: "Lead developer. Falanx, 2003–2006. Non-interactive game-style 3D demos in OpenGL ES running on FPGA prototypes at a fraction of final silicon speed, delivering visual quality beyond what audiences expected from shipping GPUs at the time.",
      },
    ],
  },
]

function ProjectItem({ text, detail }: { text: React.ReactNode; detail: string }) {
  const [expanded, setExpanded] = useState(false)
  const dateMatch = detail.match(/(?:, |\. )(~?\d{4}(?:\u2013\d{4})?)\./)
  const dateRange = dateMatch?.[1]

  return (
    <li
      className="group relative cursor-pointer text-sm leading-relaxed text-muted-foreground before:absolute before:-left-[1.125rem] before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/50"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Main text */}
      <span className="transition-colors group-hover:text-foreground">
        {text}
      </span>
      {dateRange && (
        <span className="mt-0.5 block text-[11px] font-mono tracking-wide text-muted-foreground/60">
          {dateRange}
        </span>
      )}

      {/* Desktop hover tooltip */}
      <span className="pointer-events-none absolute left-0 top-full z-10 mt-2 hidden max-w-sm rounded-md border border-border bg-card p-3 text-xs leading-relaxed text-muted-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100 md:block">
        {detail}
      </span>

      {/* Mobile tap-to-expand */}
      {expanded && (
        <span className="mt-1.5 block text-xs leading-relaxed text-muted-foreground/80 md:hidden">
          {detail}
        </span>
      )}
    </li>
  )
}

export function ThingsBuilt() {
  return (
    <section className="relative bg-card px-6 py-20 md:px-12 lg:px-24">
      {/* Decorative corner accents */}
      <div className="absolute left-6 top-6 h-16 w-16 border-l-2 border-t-2 border-primary/30 md:left-12 lg:left-24" />
      <div className="absolute bottom-6 right-6 h-16 w-16 border-b-2 border-r-2 border-primary/30 md:right-12 lg:right-24" />

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
                  <ProjectItem key={index} text={item.text} detail={item.detail} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
