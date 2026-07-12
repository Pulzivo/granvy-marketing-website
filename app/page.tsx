import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { VoiceModule } from "@/components/voice-module";
import { ModulesGrid } from "@/components/modules-grid";
import { HowItWorks } from "@/components/how-it-works";
import { Verticals } from "@/components/verticals";
import { CtaBand } from "@/components/cta-band";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <VoiceModule />
        <ModulesGrid />
        <HowItWorks />
        <Verticals />
        <CtaBand />
        <Footer />
      </main>
    </>
  );
}
