import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "..";

describe("NavigationMenu", () => {
  describe("Navigation Logo", () => {
    it("render corectly", () => {
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      );

      const navLogo = screen.getByText("Fikri A.R.");

      expect(navLogo).toBeVisible();
    });
  });
});
