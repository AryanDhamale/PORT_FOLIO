import Navbar from "@/components/headAndFoot/Navbar";
import Hero from "@/components/Hero/new-hero";
import About from "@/components/About/About";
import ProjectWork from "@/components/ProjectWorks/project-works";
import Skills from "@/components/Skill&Tools/new-skills";
import Services from "@/components/Service/service";
import Contact from "@/components/Contact/contact-us";
import Footer from "@/components/headAndFoot/Footer";
import Loader from "@/components/Loader/loader";
import { Suspense } from "react";

function Home() {
  return (
    // background-#f6fbf9 dark-#020204 mid-#09070e light-#2b2441
    <div className="bg-[#f6fbf9] dark:bg-[#020204]">
      <Suspense fallback={<Loader />}>
        <Navbar />
        <main className="flex flex-col gap-y-40">
          <Hero />
          <About />
          <ProjectWork />
          <Skills />
          <Services />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Home;