import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavigationMenu from "../navigation-menu";

describe("NavigationMenu", () => {
  describe("Navigation Logo", () => {
    it("render corectly", () => {
      render(<MemoryRouter>
        <NavigationMenu />
      </MemoryRouter>);

      const navLogo = screen.getByText("Fikri A.R.");

      expect(navLogo).toBeVisible();
    });
  });
});
