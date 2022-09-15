import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { navigationData, NavigationDataType } from "src/data";
import NavigationMenu from "../navigation-menu";

describe("Navigation Menu", () => {
  it("Render correctly", () => {
    render(
      <MemoryRouter>
        <NavigationMenu />
      </MemoryRouter>
    );

    navigationData.forEach(({ title, link }: NavigationDataType) => {
      const menu = screen.getByText(title);

      expect(menu).toBeVisible();
      expect(menu).toHaveAttribute("href", link);
    });
  });
});
