import { render, screen } from "@testing-library/react";
import { heroData } from "src/data";
import Hero from "../hero";

describe("Hero", () => {
  it("Render correctly for home page", () => {
    render(<Hero isHome={true} data={heroData.home} />);

    const greeting = screen.getByText(heroData.home.greeting!);
    expect(greeting).toBeVisible();

    const title = screen.getByText(heroData.home.title);
    expect(title).toBeVisible();

    const desc = screen.getByText(/a/);
    expect(desc).toBeVisible();

    const descHighlight = screen.getByText(heroData.home.descHighlight!);
    expect(descHighlight).toBeVisible();

    const image = screen.getByAltText(heroData.home.img);
    expect(image).toBeVisible();

    const button = screen.getByText(heroData.home.button!.title);
    expect(button).toBeVisible();
    expect(button).toHaveAttribute("href", heroData.home.button!.link);
    expect(button).toHaveAttribute("target", "_blank");
    expect(button).toHaveAttribute("rel", "noreferrer noopener");
  });

  it("Render correctly for about page", () => {
    render(<Hero isHome={false} data={heroData.about} />);

    const title = screen.getByText(heroData.about.title);
    expect(title).toBeVisible();

    const desc = screen.getByText(heroData.about.desc);
    expect(desc).toBeVisible();

    const image = screen.getByAltText(heroData.about.img);
    expect(image).toBeVisible();
  });

  it("Render correctly for project page", () => {
    render(<Hero isHome={false} data={heroData.projects} />);

    const title = screen.getByText(heroData.projects.title);
    expect(title).toBeVisible();

    const desc = screen.getByText(heroData.projects.desc);
    expect(desc).toBeVisible();

    const image = screen.getByAltText(heroData.projects.img);
    expect(image).toBeVisible();
  });
});
