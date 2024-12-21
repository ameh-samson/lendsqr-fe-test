import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RouteConfig from "./index";

// Mock the screens to avoid rendering full components during tests
vi.mock("@/screens/home/Home", () => ({
  default: () => <div>Home Component</div>,
}));
vi.mock("@/screens/dashboard/Dashboard", () => ({
  default: () => <div>Dashboard Component</div>,
}));
vi.mock("@/screens/users/Users", () => ({
  default: () => <div>Users Component</div>,
}));
vi.mock("@/screens/userDetails/UserDetails", () => ({
  default: () => <div>UserDetails Component</div>,
}));

describe("RouteConfig", () => {
  it("renders the Home component for the '/' route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <RouteConfig />
      </MemoryRouter>
    );

    // Assert that Home component is rendered
    expect(screen.getByText("Home Component")).toBeInTheDocument();
  });

  it("renders the Dashboard component for the '/dashboard' route", () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <RouteConfig />
      </MemoryRouter>
    );

    // Assert that Dashboard component is rendered
    expect(screen.getByText("Dashboard Component")).toBeInTheDocument();
  });

  it("renders the Users component for the '/users' route", () => {
    render(
      <MemoryRouter initialEntries={["/users"]}>
        <RouteConfig />
      </MemoryRouter>
    );

    // Assert that Users component is rendered
    expect(screen.getByText("Users Component")).toBeInTheDocument();
  });

  it("renders the UserDetails component for the '/user/:userId' route", () => {
    render(
      <MemoryRouter initialEntries={["/user/1"]}>
        <RouteConfig />
      </MemoryRouter>
    );

    // Assert that UserDetails component is rendered
    expect(screen.getByText("UserDetails Component")).toBeInTheDocument();
  });
});
