import { render, screen } from "@testing-library/react";
import MetricCard from "./MetricCard";
import { describe, it, expect } from "vitest";

describe("MetricCard Component", () => {
  const mockProps = {
    image: "https://image.png",
    title: "Test Metric",
    value: 123,
  };

  it("renders the component with the correct props", () => {
    render(<MetricCard {...mockProps} />);

    // Check if the image is rendered with the correct src and alt attributes
    const imageElement = screen.getByRole("img", { name: mockProps.title });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockProps.image);
    expect(imageElement).toHaveAttribute("alt", mockProps.title);

    // Check if the title is rendered
    const titleElement = screen.getByText(mockProps.title);
    expect(titleElement).toBeInTheDocument();

    // Check if the value is rendered
    const valueElement = screen.getByText(mockProps.value);
    expect(valueElement).toBeInTheDocument();
  });
});
