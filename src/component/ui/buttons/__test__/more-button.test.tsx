import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MoreButton from "../more-button";

describe("More button", () => {
  it("Render correctly", () => {
    render(
      <MemoryRouter>
        <MoreButton title="More info" url="/about" />
      </MemoryRouter>
    );

    const buttonTitle = screen.getByText("More info");
    expect(buttonTitle).toBeVisible();
    expect(buttonTitle).toHaveAttribute("href", "/about");

    const buttonIcon = screen.getByTestId("arrow-right-icon");
    expect(buttonIcon).toBeVisible();
  });
});
