import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import ImageSlider from "@/components/layout/ImageSlider";
import ReachAudience from "@/components/layout/ReachAudience";
import SspIntegrationSection from "@/components/layout/SspIntegrationSection";
import BrandSafety from "@/components/layout/BrandSafety";
import AdSlider from "@/components/layout/AdSlider";
import GeopathSection from "@/components/layout/GeopathSection";
import ScreenCategories from "@/components/layout/ScreenCategories";
import AdTechSection from "@/components/layout/AdTechSection";

export default function Home() {
  return (
    <>
    <Navbar />
    <ImageSlider/>
    <ReachAudience/>
    <SspIntegrationSection/>
    <BrandSafety/>
    <AdSlider/>
    <GeopathSection/>
    <ScreenCategories/>
    <AdTechSection/>
    </>
  );
}
