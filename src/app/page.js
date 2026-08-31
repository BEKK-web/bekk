import HeroSection from "@/components/home/HeroSection";
import TrajectoryStats from "@/components/home/TrajectoryStats";
import BrandsStrip from "@/components/home/BrandsStrip";
import SolutionsSection from "@/components/home/SolutionsSection";
import AboutSection from "@/components/home/AboutSection";
import FaqSection, { faqs } from "@/components/home/FaqSection";
import ContactSection from "@/components/home/ContactSection";

// Datos estructurados de las preguntas frecuentes. El texto sale del mismo
// origen que la sección visible para que coincidan exactamente.
const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
    })),
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <HeroSection />
            <TrajectoryStats />
            <BrandsStrip />
            <SolutionsSection />
            <AboutSection />
            <FaqSection />
            <ContactSection />
        </>
    );
}
