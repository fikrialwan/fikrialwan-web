/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import SocialMediaDesktop from "..";

describe("Social Media Desktop Size", () => {
  it("Render correctly", () => {
    render(<SocialMediaDesktop />);

    const email = screen.getByText("fikriar93@gmail.com");
    expect(email).toBeInTheDocument();
    expect(email).not.toBeVisible();
    expect(email).toHaveAttribute("href", "mailto:fikriar93@gmail.com");

    const linkedin = screen.getByAltText("Linkedin icon");
    expect(linkedin).toBeInTheDocument();
    expect(linkedin).not.toBeVisible();
    expect(linkedin.closest("a")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/fikri-alwan/"
    );
    expect(linkedin.closest("a")).toHaveAttribute("target", "_blank");
    expect(linkedin.closest("a")).toHaveAttribute("rel", "noreferrer noopener");

    const github = screen.getByAltText("Github icon");
    expect(github).toBeInTheDocument();
    expect(github).not.toBeVisible();
    expect(github.closest("a")).toHaveAttribute(
      "href",
      "https://github.com/fikrialwan"
    );
    expect(github.closest("a")).toHaveAttribute("target", "_blank");
    expect(github.closest("a")).toHaveAttribute("rel", "noreferrer noopener");
  });
});
