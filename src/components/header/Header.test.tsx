import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import { describe, it, expect } from "vitest";

describe("Header Component", () => {
  it("renders the logo with the correct link", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logoLink = screen.getByRole("link", { name: /logo/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");

    const logoImage = screen.getByRole("img", { name: /logo/i });
    expect(logoImage).toBeInTheDocument();
  });

  it("renders the search bar with input and button", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const inputField = screen.getByPlaceholderText("Search for anything");
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute("type", "text");

    const searchButton = screen.getByRole("button");
    expect(searchButton).toBeInTheDocument();

    const searchIcon = screen.getByRole("img", { name: /search/i });
    expect(searchIcon).toBeInTheDocument();
  });

  it("renders profile container with notification icon, avatar, username, and dropdown", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const notificationIcon = screen.getByRole("img", { name: /notification/i });
    expect(notificationIcon).toBeInTheDocument();

    const avatarImage = screen.getByRole("img", { name: /user avatar/i });
    expect(avatarImage).toBeInTheDocument();

    const username = screen.getByText("Adedeji");
    expect(username).toBeInTheDocument();

    const dropdownIcon = screen.getByRole("img", { name: /dropdown/i });
    expect(dropdownIcon).toBeInTheDocument();
  });

  it("renders a link to 'Docs'", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const docsLink = screen.getByRole("link", { name: /docs/i });
    expect(docsLink).toBeInTheDocument();
    expect(docsLink).toHaveAttribute("href", "#");
  });
});
