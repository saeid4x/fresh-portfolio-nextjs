 
import About from "@/components/About.component";
import Intro from "@/components/Intro.component";
import SectionDivider from "@/components/Section-divider.component";
import Skills from "@/components/Skills.component";
import Contact from "@/components/contact.component";
import Experience from "@/components/experience.component";
import Projects from "@/components/projects.component";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
    </main>
  );
}
