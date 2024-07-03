import AboutSection from "src/component/about";
import Experience from "src/component/experience";
import Hero from "src/component/hero/hero";
// import ProjectSection from "src/component/project";
import { aboutHomeData, heroData } from "src/data";

function Home() {
  return (
    <>
      <Hero isHome={true} data={heroData.home} />
      <AboutSection isHome={true} data={aboutHomeData} />
      <Experience />
      {/* <ProjectSection isHome={true} /> */}
    </>
  );
}

export default Home;
