import { render, screen } from "@testing-library/react";
import SocialMediaDesktop from "..";

describe("Social Media Desktop Size", () => {
  it("Render correctly", () => {
    render(<SocialMediaDesktop />);

    const email = screen.getByText("fikriar93@gmail.com");
    expect(email).toBeInTheDocument();
    expect(email).not.toBeVisible();
    expect(email).toHaveAttribute("href", "maito: fikriar93@gmail.com");
    expect(email).toHaveAttribute("target", "_blank");
    expect(email).toHaveAttribute("rel", "noreferrer noopener");

    const linkedin = screen.getByAltText("Linkedin icon image");
    expect(linkedin).toBeInTheDocument();
    expect(linkedin).not.toBeVisible();
    expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/fikri-alwan/"
    );
    expect(linkedin).toHaveAttribute("target", "_blank");
    expect(linkedin).toHaveAttribute("rel", "noreferrer noopener");

    const github = screen.getByAltText("Github icon image");
    expect(github).toBeInTheDocument();
    expect(github).not.toBeVisible();
    expect(github).toHaveAttribute("href", "https://github.com/fikrialwan");
    expect(github).toHaveAttribute("target", "_blank");
    expect(github).toHaveAttribute("rel", "noreferrer noopener");
  });
});
