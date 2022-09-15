import { render, screen } from "@testing-library/react";
import Copyright from "../copyright";

describe("Copyright footer", () => {
  it("Render correctly", () => {
    render(<Copyright />);

    const inspired = screen.getByText(/Inspired by/);
    expect(inspired).toBeVisible();

    const refOne = screen.getByText("https://kentcdodds.com");
    expect(refOne).toBeVisible();
    expect(refOne).toHaveAttribute("href", "https://kentcdodds.com");
    expect(refOne).toHaveAttribute("target", "_blank");
    expect(refOne).toHaveAttribute("rel", "noreferrer noopener");

    const refTwo = screen.getByText("https://sonnylab.com");
    expect(refTwo).toBeVisible();
    expect(refTwo).toHaveAttribute("href", "https://sonnylab.com");
    expect(refTwo).toHaveAttribute("target", "_blank");
    expect(refTwo).toHaveAttribute("rel", "noreferrer noopener");

    const refThree = screen.getByText("https://brittanychiang.com");
    expect(refThree).toBeVisible();
    expect(refThree).toHaveAttribute("href", "https://brittanychiang.com");
    expect(refThree).toHaveAttribute("target", "_blank");
    expect(refThree).toHaveAttribute("rel", "noreferrer noopener");

    const designed = screen.getByText(/Designed and built by/);
    expect(designed).toBeVisible();

    const creator = screen.getByText("Fikri Alwan Ramadhan");
    expect(creator).toBeVisible();
    expect(creator).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/fikri-alwan/"
    );
    expect(creator).toHaveAttribute("target", "_blank");
    expect(creator).toHaveAttribute("rel", "noreferrer noopener");
  });
});
