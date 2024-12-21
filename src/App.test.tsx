import { render, screen } from "@testing-library/react";
import App from "./App";
import { vi } from "vitest";

// Mocking the Layout and RouteConfig components
vi.mock("./layout", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

vi.mock("./routes", () => ({
  __esModule: true,
  default: () => <div>Routes are working</div>,
}));

describe("App Component", () => {
  it("renders the Layout and RouteConfig components", () => {
    render(<App />);

    // Check that the Layout renders its children
    expect(screen.getByText("Routes are working")).toBeInTheDocument();
  });

  it("renders the RouteConfig inside Layout", () => {
    render(<App />);

    // Check if the RouteConfig component is rendered inside the Layout component
    expect(screen.getByText("Routes are working")).toBeInTheDocument();
  });
});
