import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogosBar from "@/components/LogosBar";
import ProblemSection from "@/components/ProblemSection";
import FeatureTeaser from "@/components/FeatureTeaser";
import IndustryTabs from "@/components/IndustryTabs";
import Testimonials from "@/components/Testimonials";
import PlatformOverview from "@/components/PlatformOverview";
import Pricing from "@/components/Pricing";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <Hero />
      <LogosBar />
      <ProblemSection />
      <FeatureTeaser />
      <IndustryTabs />
      <Testimonials />
      <PlatformOverview />
      <Pricing />
      <CTABanner />
      <Footer />
    </main>
  );
}
