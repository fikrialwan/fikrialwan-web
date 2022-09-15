import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "..";

describe("Navigation", () => {
  describe("Navigation Logo", () => {
    it("render corectly", () => {
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      );

      const navLogo = screen.getByText("Fikri A.R.");

      expect(navLogo).toBeVisible();
      expect(navLogo).toHaveAttribute("href", "/");
    });
  });

  describe("Navigation Icons", () => {
    it("render corectly", async () => {
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      );

      const menuIcon = screen.getByTestId("menu-icon");

      expect(menuIcon).toBeVisible();
    });
  });
});
