import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { aboutData, AboutDataType, aboutHomeData } from "src/data";
import About from "..";

describe("About", () => {
  it("Render correctly on home page", () => {
    render(
      <MemoryRouter>
        <About isHome={true} data={aboutHomeData} />
      </MemoryRouter>
    );

    const title = screen.getByText("About me");
    expect(title).toBeVisible();

    aboutHomeData.desc.split("\n").forEach((desc) => {
      const descAbout = screen.getByText(desc);
      expect(descAbout).toBeVisible();
    });

    const descToTechStack = screen.getByText(
      "Here are a few technologies I've been working with recently:"
    );
    expect(descToTechStack).toBeVisible();

    aboutHomeData.techStack!.forEach((tech) => {
      const techAbout = screen.getByText(tech);
      expect(techAbout).toBeVisible();
    });

    const img = screen.getByAltText(aboutHomeData.img.alt);
    expect(img).toBeVisible();
  });

  aboutData.forEach((about: AboutDataType, key: number) => {
    it(`Render correctly about ${key + 1} on about page`, () => {
      render(
        <MemoryRouter>
          <About isHome={false} data={about} />
        </MemoryRouter>
      );

      about.desc.split("\n").forEach((desc) => {
        const descAbout = screen.getByText(desc);
        expect(descAbout).toBeVisible();
      });

      const img = screen.getByAltText(about.img.alt);
      expect(img).toBeVisible();
    });
  });
});
