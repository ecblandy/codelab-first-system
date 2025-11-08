import Hero from "@/components/landing-page/hero";
import HistorySection from "@/components/landing-page/history";
import ProcessSection from "@/components/landing-page/process";
import FeaturedProjects from "@/components/landing-page/projects/featured-projects";
import TeamSection from "@/components/landing-page/team";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <HistorySection />
      <TeamSection />
      <ProcessSection />
      <FeaturedProjects />
    </div>
  );
}
