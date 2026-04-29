const milestones = [
  {
    company: "ARM Mali GPU",
    description:
      "Early employee at Falanx Microsystems, a startup in Norway that built the Mali GPU from scratch. Contributed across the stack, spanning RTL design and verification of the GPU to writing bare-metal software and pre-silicon tech demos for early FPGA prototypes. ARM acquired us in 2006 — Mali powers billions of devices today.",
  },
  {
    company: "Swarm64",
    description:
      "Co-founded Swarm64. We built FPGA-based hardware that accelerated database computation — massively parallel, deployed in the cloud. Partnered with Intel and Xilinx. Acquired by ServiceNow in 2021.",
  },
  {
    company: "Orbital Machines",
    description:
      "Founded Orbital Machines, a sociocratic newspace startup that scaled to 15 employees. Worked on propellant pump designs for several customers in the launcher, lander, and zero-emission aviation space. Contributed to the Python tooling for parametric pump geometry design and optimization.",
  },
  {
    company: "Flux & Flow (present)",
    description:
      "Independent consulting - parallel architecture, RTL/verification, and parallel software.",
  },
]

export function TrackRecord() {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-24">
      {/* Section accent line */}
      <div className="absolute left-6 top-0 h-px w-[calc(100%-3rem)] bg-gradient-to-r from-transparent via-border to-transparent md:left-12 md:w-[calc(100%-6rem)] lg:left-24 lg:w-[calc(100%-12rem)]" />

      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-12 w-1.5 rounded-full bg-accent" />
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Where I&apos;ve Been
          </h2>
        </div>
        
        <div className="space-y-0">
          {milestones.map((item, index) => (
            <div 
              key={item.company} 
              className="group relative flex gap-6 pb-10 last:pb-0"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                  {index + 1}
                  {/* Pulse ring on hover */}
                  <span className="absolute inset-0 rounded-xl border-2 border-primary opacity-0 transition-opacity group-hover:animate-ping group-hover:opacity-50" />
                </div>
                {index < milestones.length - 1 && (
                  <div className="mt-3 h-full w-0.5 bg-gradient-to-b from-primary/40 to-transparent" />
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-xl font-bold">{item.company}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
