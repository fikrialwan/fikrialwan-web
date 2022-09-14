import { render, screen } from "@testing-library/react";
import NavigationMenu from "../navigation-menu";

describe("NavigationMenu", () => {
  describe("Navigation Logo", () => {
    it("render corectly", () => {
      render(<NavigationMenu />);

      const navLogo = screen.getByText("Fikri A.R.");
      expect(navLogo).toBeVisible();
      expect(navLogo).toHaveAttribute("to", "/");
    });
  });
});
