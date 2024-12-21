import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "./index";

// Mocking the Header and Sidebar components to avoid unnecessary rendering
vi.mock("@/components/header/Header", () => ({
  default: () => <div>Mocked Header</div>,
}));
vi.mock("@/components/sidebar/Sidebar", () => ({
  default: () => <div>Mocked Sidebar</div>,
}));

describe("Layout", () => {
  it("renders children content", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Layout>
          <div>Child Content</div>
        </Layout>
      </MemoryRouter>
    );

    // Ensure children are rendered
    expect(screen.getByText("Child Content")).toBeInTheDocument();
  });

  it("does not render Header and Sidebar on login page (/)", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Layout>
          <div>Child Content</div>
        </Layout>
      </MemoryRouter>
    );

    // Ensure Header and Sidebar are not rendered on the login page
    expect(screen.queryByText("Mocked Header")).not.toBeInTheDocument();
    expect(screen.queryByText("Mocked Sidebar")).not.toBeInTheDocument();
  });

  it("renders Header and Sidebar for non-login pages", () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Layout>
          <div>Child Content</div>
        </Layout>
      </MemoryRouter>
    );

    // Ensure Header and Sidebar are rendered for non-login pages
    expect(screen.getByText("Mocked Header")).toBeInTheDocument();
    expect(screen.getByText("Mocked Sidebar")).toBeInTheDocument();
  });
});
