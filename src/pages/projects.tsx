import Hero from "src/component/hero/hero";
import { heroData } from "src/data";

function Projects() {
  return (
    <>
      <Hero isHome={false} data={heroData.projects} />
    </>
  );
}

export default Projects;
