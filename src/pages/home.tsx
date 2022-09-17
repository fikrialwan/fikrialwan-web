import Hero from "src/component/hero/hero";
import { heroData } from "src/data";

function Home() {
  return (
    <>
      <Hero isHome={true} data={heroData.home} />
    </>
  );
}

export default Home;
