import AboutSection from "@/sections/aboutSection";
import HeaderSection from "@/sections/headerSection";
import SkillSection from "@/sections/skillSection";
import ProjectSection from "@/sections/projectSection";
import ContactSection from "@/sections/contactSection";
import SectionDivider from "@/components/sectionDivider";
import ExpSection from "@/sections/expSection";

export default function Home() {
  return (
    <>
      <div className="scroll-smooth">
        <HeaderSection />
        <AboutSection />
        <SectionDivider />
        <SkillSection />
        <SectionDivider />
        <ExpSection />
        <SectionDivider />
        <ProjectSection />
        <SectionDivider />
        <ContactSection />
      </div>
    </>
  );
}
