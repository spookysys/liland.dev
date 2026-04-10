import { Hero } from "@/components/hero"
import { VideoSection } from "@/components/video-section"
import { ExpertiseGrid } from "@/components/expertise-grid"
import { ThingsBuilt } from "@/components/things-built"
import { TrackRecord } from "@/components/track-record"
import { HowIWork } from "@/components/how-i-work"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <VideoSection />
      <ExpertiseGrid />
      <ThingsBuilt />
      <TrackRecord />
      <HowIWork />
    </main>
  )
}
