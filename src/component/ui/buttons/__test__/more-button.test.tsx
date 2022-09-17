import { render, screen } from "@testing-library/react";
import MoreButton from "../more-button";

describe("More button", () => {
  it("Render correctly", () => {
    render(<MoreButton title="More info" url="about" />);

    const buttonTitle = screen.getByText("More info");
    expect(buttonTitle).toBeVisible();
    expect(buttonTitle).toHaveAttribute("href", "about");

    const buttonIcon = screen.getByAltText("arrow-right-icon");
    expect(buttonIcon).toBeVisible();
  });
});
