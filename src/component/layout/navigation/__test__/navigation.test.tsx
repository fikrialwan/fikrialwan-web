import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { navigationData, NavigationDataType } from "src/data";
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

    it("show close icon after click menu icon and show menu icon after click close icon", () => {
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      );

      const menuIcon = screen.getByTestId("menu-icon");
      const closeIcon = screen.getByTestId("close-icon");

      expect(menuIcon).toBeVisible();
      expect(closeIcon).not.toBeVisible();

      fireEvent.click(menuIcon);

      expect(menuIcon).not.toBeVisible();
      expect(closeIcon).toBeVisible();

      fireEvent.click(closeIcon);

      expect(menuIcon).toBeVisible();
      expect(closeIcon).not.toBeVisible();
    });
  });

  it("show navigation menu on mobile when menu icon onlclick and hidden navigation menu on mobile when close icon onlick", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const menuIcon = screen.getByTestId("menu-icon");
    const closeIcon = screen.getByTestId("close-icon");

    navigationData.forEach(({ title, link }: NavigationDataType) => {
      const menu = screen.getByText(title);

      expect(menu).not.toBeVisible();
    });

    fireEvent.click(menuIcon);
    navigationData.forEach(({ title, link }: NavigationDataType) => {
      const menu = screen.getByText(title);

      expect(menu).toBeVisible();
    });

    fireEvent.click(closeIcon);
    navigationData.forEach(({ title, link }: NavigationDataType) => {
      const menu = screen.getByText(title);

      expect(menu).not.toBeVisible();
    });
  });
});
