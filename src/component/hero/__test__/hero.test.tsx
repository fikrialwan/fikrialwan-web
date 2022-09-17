import { render } from "@testing-library/react";
import Hero from "../hero";

describe("Hero", () => {
  it("Render correctly for home page", () => {
    render(<Hero />);
  });

  it("Render correctly for about page", () => {
    render(<Hero />);
  });

  it("Render correctly for project page", () => {
    render(<Hero />);
  });
});
