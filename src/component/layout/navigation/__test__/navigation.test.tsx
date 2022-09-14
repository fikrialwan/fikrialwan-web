import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "..";
import resizeWindow from "../../../../etc/resize-window";
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
    it("render corectly, show only on mobile", () => {
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      );

      const menuIcon = screen.getByTestId("menu-icon");

      expect(menuIcon).not.toBeVisible();

      resizeWindow(760, 300);
      expect(menuIcon).toBeVisible();
    });
  });
});
