import { render, screen } from "@testing-library/react";
import MetricCard from "./MetricCard";
import { describe, test, expect } from "vitest";

// Mock props for the MetricCard component
const mockData = {
  image: "https://example.com/image.jpg",
  title: "Metric Title",
  value: 1000,
};

describe("MetricCard Component", () => {
  test("renders the MetricCard with image, title, and value", () => {
    // Render the component with mock data
    render(<MetricCard {...mockData} />);

    // Check if the image is rendered with the correct src and alt text
    const imageElement = screen.getByAltText(mockData.title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockData.image);

    // Check if the title is rendered
    const titleElement = screen.getByText(mockData.title);
    expect(titleElement).toBeInTheDocument();

    // Check if the value is rendered
    const valueElement = screen.getByText(mockData.value);
    expect(valueElement).toBeInTheDocument();
  });
});
