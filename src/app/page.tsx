import Hero from "@/components/landing-page/hero";
import HistorySection from "@/components/landing-page/history";
import ProcessSection from "@/components/landing-page/process";
import TeamSection from "@/components/team";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <HistorySection />
      <TeamSection />
      <ProcessSection />
    </div>
  );
}
