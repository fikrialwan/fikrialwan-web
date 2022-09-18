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

    let firstDesc = screen.queryByText(experienceData[0].desc);
    expect(firstDesc).toBeVisible();

    let secondDesc = screen.queryByText(experienceData[1].desc);
    expect(secondDesc).toEqual(null);

    let thirdDesc = screen.queryByText(experienceData[2].desc);
    expect(thirdDesc).toEqual(null);

    const secondCompany = screen
      .getByText(experienceData[1].company)
      .closest("article")!;
    fireEvent.click(secondCompany);

    firstDesc = screen.queryByText(experienceData[0].desc);
    expect(firstDesc).toEqual(null);

    secondDesc = screen.queryByText(experienceData[1].desc);
    expect(secondDesc).toBeVisible();

    thirdDesc = screen.queryByText(experienceData[2].desc);
    expect(thirdDesc).toEqual(null);

    const thirdCompany = screen
      .getByText(experienceData[2].company)
      .closest("article")!;
    fireEvent.click(thirdCompany);

    firstDesc = screen.queryByText(experienceData[0].desc);
    expect(firstDesc).toEqual(null);

    secondDesc = screen.queryByText(experienceData[1].desc);
    expect(secondDesc).toEqual(null);

    thirdDesc = screen.queryByText(experienceData[2].desc);
    expect(thirdDesc).toBeVisible();

    const firstCompany = screen
      .getByText(experienceData[0].company)
      .closest("article")!;
    fireEvent.click(firstCompany);

    firstDesc = screen.queryByText(experienceData[0].desc);
    expect(firstDesc).toBeVisible();

    secondDesc = screen.queryByText(experienceData[1].desc);
    expect(secondDesc).toEqual(null);

    thirdDesc = screen.queryByText(experienceData[2].desc);
    expect(thirdDesc).toEqual(null);
  });
});
