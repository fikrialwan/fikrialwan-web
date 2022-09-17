import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { heroData } from "src/data";
import Hero from "../hero";

describe("Hero", () => {
  it("Render correctly for home page", () => {
    render(
      <MemoryRouter>
        <Hero isHome={true} data={heroData.home} />
      </MemoryRouter>
    );

    const greeting = screen.getByText(heroData.home.greeting!);
    expect(greeting).toBeVisible();

    heroData.home.title.split("\n").forEach((title) => {
      const titleTag = screen.getByText(title);
      expect(titleTag).toBeVisible();
    });

    const desc = screen.getByText(heroData.home.desc);
    expect(desc).toBeVisible();

    const descHighlight = screen.getByText(heroData.home.descHighlight!);
    expect(descHighlight).toBeVisible();

    const image = screen.getByAltText(heroData.home.img.alt);
    expect(image).toBeVisible();

    const button = screen.getByText(heroData.home.button!.title);
    expect(button).toBeVisible();
    expect(button).toHaveAttribute("href", heroData.home.button!.link);
    expect(button).toHaveAttribute("target", "_blank");
    expect(button).toHaveAttribute("rel", "noreferrer noopener");
  });

  it("Render correctly for about page", () => {
    render(
      <MemoryRouter>
        <Hero isHome={false} data={heroData.about} />
      </MemoryRouter>
    );

    heroData.about.title.split("\n").forEach((title) => {
      const titleTag = screen.getByText(title);
      expect(titleTag).toBeVisible();
    });

    const desc = screen.getByText(heroData.about.desc);
    expect(desc).toBeVisible();

    const image = screen.getByAltText(heroData.about.img.alt);
    expect(image).toBeVisible();
  });

  it("Render correctly for project page", () => {
    render(
      <MemoryRouter>
        <Hero isHome={false} data={heroData.projects} />
      </MemoryRouter>
    );

    heroData.projects.title.split("\n").forEach((title) => {
      const titleTag = screen.getByText(title);
      expect(titleTag).toBeVisible();
    });

    const desc = screen.getByText(heroData.projects.desc);
    expect(desc).toBeVisible();

    const image = screen.getByAltText(heroData.projects.img.alt);
    expect(image).toBeVisible();
  });
});
