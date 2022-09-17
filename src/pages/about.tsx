import Hero from "src/component/hero/hero";
import { heroData } from "src/data";

function About() {
  return (
    <>
      <Hero isHome={false} data={heroData.about} />
    </>
  );
}

export default About;
