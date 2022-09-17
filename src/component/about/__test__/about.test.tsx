import { render, screen } from "@testing-library/react";
import { aboutData, AboutDataType, aboutHomeData } from "src/data";
import About from "..";

describe("About", () => {
  it("Render correctly on home page", () => {
    render(<About isHome={true} data={aboutHomeData} />);

    const title = screen.getByText("About me");
    expect(title).toBeVisible();

    aboutHomeData.desc.split("\n").forEach((desc) => {
      const descAbout = screen.getByText(desc);
      expect(descAbout).toBeVisible();
    });

    aboutHomeData.techStack!.forEach((tech) => {
      const techAbout = screen.getByText(tech);
      expect(techAbout).toBeVisible();
    });

    const img = screen.getByAltText(aboutHomeData.img.alt);
    expect(img).toBeVisible();
  });

  aboutData.forEach((about: AboutDataType, key: number) => {
    it(`Render correctly about ${key + 1} on about page`, () => {
      render(<About isHome={false} data={about} />);

      about.desc.split("\n").forEach((desc) => {
        const descAbout = screen.getByText(desc);
        expect(descAbout).toBeVisible();
      });

      const img = screen.getByAltText(about.img.alt);
      expect(img).toBeVisible();
    });
  });
});
