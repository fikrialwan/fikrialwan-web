/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import {
  LinkProjects,
  LinkProjectsType,
  projectsData,
  ProjectsDataType,
} from "src/data/projects-data";
import ProjectSection from "..";

describe("Project", () => {
  it("Render correctly in home page", () => {
    render(<ProjectSection isHome={true} />);

    const title = screen.getByText("Projects");
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

        techStack.forEach((tech: string) => {
          const techComp = screen.getByText(tech);
          expect(techComp).toBeVisible();
        });

        url
          .filter(({ type }: LinkProjectsType) => type === LinkProjects.github)
          .forEach((link: LinkProjectsType) => {
            const urlComp = screen.getByTestId("github-icon");
            expect(urlComp).toBeVisible();
            expect(urlComp.closest("a")).toHaveAttribute("href", link.url);
            expect(urlComp.closest("a")).toHaveAttribute("target", "_blank");
            expect(urlComp.closest("a")).toHaveAttribute(
              "rel",
              "noreferrer noopener"
            );
          });

        url
          .filter(({ type }: LinkProjectsType) => type === LinkProjects.link)
          .forEach((link: LinkProjectsType) => {
            const urlComp = screen.getByTestId("social-media-link-mobile-icon");
            expect(urlComp).toBeVisible();
            expect(urlComp.closest("a")).toHaveAttribute("href", link.url);
            expect(urlComp.closest("a")).toHaveAttribute("target", "_blank");
            expect(urlComp.closest("a")).toHaveAttribute(
              "rel",
              "noreferrer noopener"
            );
          });
      });
  });
});
