/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from "@testing-library/react";
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

  it("first description will be show and then desc will change when click the company and position to the desc of experience in the company", async () => {
    render(<Experience />);

    const firstDesc = screen.queryByText(experienceData[0].desc);
    expect(firstDesc).toBeVisible();

    const secondDesc = screen.queryByText(experienceData[1].desc);
    expect(secondDesc).toEqual(null);

    const thirdDesc = screen.queryByText(experienceData[1].desc);
    expect(thirdDesc).toEqual(null);

    const secondCompany = screen
      .getByText(experienceData[1].company)
      .closest("article")!;
    fireEvent.click(secondCompany);

    expect(firstDesc).toEqual(null);

    expect(secondDesc).toBeVisible();

    expect(thirdDesc).toEqual(null);

    const thirdCompany = screen
      .getByText(experienceData[2].company)
      .closest("article")!;
    fireEvent.click(thirdCompany);

    expect(firstDesc).toEqual(null);

    expect(secondDesc).toEqual(null);

    expect(thirdDesc).toBeVisible();

    const firstCompany = screen
      .getByText(experienceData[0].company)
      .closest("article")!;
    fireEvent.click(firstCompany);

    expect(firstDesc).toBeVisible();

    expect(secondDesc).toEqual(null);

    expect(thirdDesc).toEqual(null);
  });
});
