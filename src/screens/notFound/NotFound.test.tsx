import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "./NotFound";

describe("NotFound Component", () => {
  it("renders the 404 title and message", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    // Check if the title is rendered
    expect(screen.getByText("404")).toBeInTheDocument();

    // Check if the message is rendered
    expect(
      screen.getByText("Oops! The page you're looking for doesn't exist.")
    ).toBeInTheDocument();
  });

  it("renders a link to the 'All Users' page", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    // Check if the link is present and has the correct href
    const linkElement = screen.getByRole("link", { name: "All Users" });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/users");
  });
});
