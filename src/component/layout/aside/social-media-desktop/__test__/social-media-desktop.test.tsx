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
    expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/fikri-alwan/"
    );
    expect(linkedin).toHaveAttribute("target", "_blank");
    expect(linkedin).toHaveAttribute("rel", "noreferrer noopener");

    const github = screen.getByAltText("Github icon");
    expect(github).toBeInTheDocument();
    expect(github).not.toBeVisible();
    expect(github).toHaveAttribute("href", "https://github.com/fikrialwan");
    expect(github).toHaveAttribute("target", "_blank");
    expect(github).toHaveAttribute("rel", "noreferrer noopener");
  });
});
