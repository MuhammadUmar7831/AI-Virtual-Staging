import Banner from "@/components/home/Banner";
import WhyUs from "@/components/home/WhyUs";
import AIResultShowcase from "@/components/shared/AIResultShowcase";
import GalleryShowcase from "@/components/shared/GalleryShowcase";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <WhyUs/>
      <AIResultShowcase/>
      <GalleryShowcase/>
    </>
  );
}
