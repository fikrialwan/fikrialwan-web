import { render, screen } from "@testing-library/react";
import { navigationData, NavigationDataType } from "src/data";
import NavigationMenu from "../navigation-menu";

describe("Navigation Menu", () => {
  it("Render correctly", () => {
    render(<NavigationMenu />);

    navigationData.forEach(({ title, link }: NavigationDataType) => {
      const menu = screen.getByText(title);

      expect(menu).toBeVisible();
      expect(menu).toHaveAttribute("href", link);
    });
  });
});
