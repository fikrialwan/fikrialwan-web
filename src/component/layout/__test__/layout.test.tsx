import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "..";

describe("Layout", () => {
  it("Render correctly", () => {
    render(
      <MemoryRouter>
        <Layout>
          <div>
            <h1>title layout test</h1>
            <a href="/">link layout test</a>
          </div>
        </Layout>
      </MemoryRouter>
    );

    const title = screen.getByText("title layout test");
    const link = screen.getByText("link layout test");

    expect(title).toBeVisible();
    expect(link).toBeVisible();
    expect(link).toHaveAttribute("href", "/");
  });
});
