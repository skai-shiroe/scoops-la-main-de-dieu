import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";
import PageLayout from "@/components/PageLayout";

const Index = () => (
  <>
    <HeroSection />
    <AboutSection />
    <ActivitiesSection />
    <ProductsSection />
    <WhyChooseUsSection />
    <ContactSection />
  </>
);

const IndexPage = () => (
  <PageLayout>
    <div className="-mt-16">
      <Index />
    </div>
  </PageLayout>
);

export default IndexPage;
