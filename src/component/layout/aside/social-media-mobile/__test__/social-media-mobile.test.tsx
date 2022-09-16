/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import SocialMediaMobile from "..";

describe("Social Media Mobile", () => {
  it("Render correctly", () => {
    render(<SocialMediaMobile />);

    const button = screen.getByTestId("social-media-link-mobile-icon");
    expect(button).toBeVisible();

    const linkdin = screen.getByAltText("Linkdin icon mobile");
    expect(linkdin).toBeVisible();
    expect(linkdin.closest("a")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/fikri-alwan/"
    );
    expect(linkdin.closest("a")).toHaveAttribute("target", "_blank");
    expect(linkdin.closest("a")).toHaveAttribute("rel", "noreferrer noopener");

    const github = screen.getByAltText("Github icon mobile");
    expect(github).toBeVisible();
    expect(github.closest("a")).toHaveAttribute(
      "href",
      "https://github.com/fikrialwan"
    );
    expect(github.closest("a")).toHaveAttribute("target", "_blank");
    expect(github.closest("a")).toHaveAttribute("rel", "noreferrer noopener");
  });
});
