import { render, screen } from "@testing-library/react";
import { aboutHomeData } from "src/data";
import TechStack from "..";

describe("Tech stack", () => {
  it("Render correctly", () => {
    render(<TechStack data={aboutHomeData.techStack!} />);

    aboutHomeData.techStack?.forEach((tech) => {
      const techItem = screen.getByText(tech);
      expect(techItem).toBeVisible();
    });
  });
});
