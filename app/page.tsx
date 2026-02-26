import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import LogosBar from "@/components/home/LogosBar";
import ProblemSection from "@/components/home/ProblemSection";
import FeatureTeaser from "@/components/home/FeatureTeaser";
import IndustryTabs from "@/components/home/IndustryTabs";
import Testimonials from "@/components/home/Testimonials";
import PlatformOverview from "@/components/home/PlatformOverview";
import Pricing from "@/components/home/Pricing";
import CTABanner from "@/components/home/CTABanner";

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
