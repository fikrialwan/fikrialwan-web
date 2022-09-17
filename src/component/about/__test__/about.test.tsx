import { render, screen } from "@testing-library/react";
import About from "..";

describe("About", () => {
  it("Render correctly on home page", () => {
    render(<About />);

    const title = screen.getByText("About me");
    expect(title).toBeVisible();
  });

  it("Render correctly on about page", () => {
    render(<About />);
  });
});
