import { render, screen } from "@testing-library/react";
import { experienceData } from "src/data/experience-data";
import Experience from "..";

describe("Experience", () => {
  it("Render correctly", () => {
    render(<Experience />);

    const title = screen.getByText("My Experience");
    expect(title).toBeVisible();

    experienceData.forEach((data) => {
      const company = screen.getByText(data.company);
      expect(company).toBeVisible();

      const position = screen.getByText(data.position);
      expect(position).toBeVisible();
    });

    const desc = screen.getByText(experienceData[0].desc);
    expect(desc).toBeVisible();
  });
});
