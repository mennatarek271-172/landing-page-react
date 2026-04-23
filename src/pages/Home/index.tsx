import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import HeroSection from "../../sections/Hero";
import AboutStatsSection from "../../sections/AboutStats";
import FeaturesSection from "../../sections/Features";
import HowItWorksSection from "../../sections/HowItWorks";
import PricingSection from "../../sections/Pricing";
import TestimonialsSection from "../../sections/Testimonials";
import ContactSection from "../../sections/Contact";
import { Main } from "./styles";

function HomePage(): JSX.Element {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Main>
        <HeroSection />
        <AboutStatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
      </Main>
      <Footer />
    </>
  );
}

export default HomePage;
