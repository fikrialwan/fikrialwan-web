import { render, screen } from "@testing-library/react";
import Contact from "../contact";

describe("Contact footer", () => {
  it("Render correctly", () => {
    render(<Contact />);

    const title = screen.getByText("Get In Touch");
    expect(title).toBeVisible();

    const description = screen.getByText(
      "Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you!"
    );
    expect(description).toBeVisible();

    const button = screen.getByText("Say hello");
    expect(button).toBeVisible();
    expect(button).toHaveAttribute("href", "mailto:fikriar93@gmail.com");

    const image = screen.getByAltText("get in touch ilustration");
    expect(image).toBeVisible();
  });
});
