import AboutSection from "src/component/about";
import Hero from "src/component/hero/hero";
import { aboutData, AboutDataType, heroData } from "src/data";

function About() {
  return (
    <>
      <Hero isHome={false} data={heroData.about} />
      {aboutData.map((data: AboutDataType, key: number) => {
        return <AboutSection isHome={false} data={data} key={key} />;
      })}
    </>
  );
}

export default About;
