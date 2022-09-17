import AboutSection from "src/component/about";
import Hero from "src/component/hero/hero";
import { aboutHomeData, heroData } from "src/data";

function Home() {
  return (
    <>
      <Hero isHome={true} data={heroData.home} />
      <AboutSection isHome={true} data={aboutHomeData} />
    </>
  );
}

export default Home;
