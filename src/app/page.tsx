import ContactSection from "@/components/landing-page/contact";
import Hero from "@/components/landing-page/hero";
import HistorySection from "@/components/landing-page/history";
import PlansSection from "@/components/landing-page/plans";
import ProcessSection from "@/components/landing-page/process";
import FeaturedProjects from "@/components/landing-page/projects/featured-projects";
import ServicesSection from "@/components/landing-page/services";
import TeamSection from "@/components/landing-page/team";
import TestimonialsSection from "@/components/landing-page/testimonials";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <HistorySection />
      <TeamSection />
      <ProcessSection />
      <FeaturedProjects />
      <PlansSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
