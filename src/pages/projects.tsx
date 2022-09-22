import Hero from "src/component/hero/hero";
import ProjectSection from "src/component/project";
import { heroData } from "src/data";

function Projects() {
  return (
    <>
      <Hero isHome={false} data={heroData.projects} />
      <ProjectSection isHome={false} />
    </>
  );
}

export default Projects;
