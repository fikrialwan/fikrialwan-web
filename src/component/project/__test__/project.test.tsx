/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { projectsData, ProjectsDataType } from "src/data/projects-data";
import ProjectSection from "..";

describe("Project", () => {
  it("Render correctly in home page", () => {
    render(
      <MemoryRouter>
        <ProjectSection isHome={true} />
      </MemoryRouter>
    );

    const title = screen.getByText("My Projects");
    expect(title).toBeVisible();

    const more = screen.getByText("More Projects");
    expect(more).toBeVisible();

    projectsData
      .slice(0, 6)
      .forEach(({ name, desc, techStack, url }: ProjectsDataType) => {
        const nameComp = screen.getByText(name);
        expect(nameComp).toBeVisible();

        const descComp = screen.getByText(desc);
        expect(descComp).toBeVisible();
      });
  });
});
