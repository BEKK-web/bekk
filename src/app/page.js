import HeroSection from "@/components/home/HeroSection";
import TrajectoryStats from "@/components/home/TrajectoryStats";
import BrandsStrip from "@/components/home/BrandsStrip";
import SolutionsSection from "@/components/home/SolutionsSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <TrajectoryStats />
            <BrandsStrip />
            <SolutionsSection />
            <AboutSection />
            <ContactSection />
        </>
    );
}
