import Banner from "@/components/home/Banner";
import HowToUseOurProduct from "@/components/home/HowToUseOurProduct";
import InteractiveDesignBanner from "@/components/home/InteractiveDesignBanner";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhyUs from "@/components/home/WhyUs";
import AIResultShowcase from "@/components/shared/AIResultShowcase";
import FAQs from "@/components/shared/FAQs";
import Footer from "@/components/shared/Footer";
import GalleryShowcase from "@/components/shared/GalleryShowcase";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <WhyUs/>
      <AIResultShowcase/>
      <GalleryShowcase color="secondary"/>
      <HowToUseOurProduct/>
      <WhyChooseUs/>
      <InteractiveDesignBanner/>
      <FAQs/>
      <Footer/>
    </>
  );
}
