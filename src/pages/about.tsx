import AboutSection from "src/component/about";
import Hero from "src/component/hero/hero";
import { aboutData, heroData } from "src/data";

function About() {
  return (
    <>
      <Hero isHome={false} data={heroData.about} />
      {aboutData.map((data) => {
        return <AboutSection isHome={false} data={data} />;
      })}
    </>
  );
}

export default About;
