import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import ContextProvider, { useDashboardContext } from "./DashboardContext";
import { useAppState } from "@/hooks/useAppState";

// Mock useAppState hook
vi.mock("@/hooks/useAppState", () => ({
  useAppState: vi.fn(),
}));

describe("ContextProvider and useDashboardContext", () => {
  it("should provide the correct context to child components", () => {
    // Mock the useAppState hook to return the complete mock state
    const mockState = {
      data: [{ id: 1, status: "Active", hasLoan: true, hasSavings: false }],
      activeUsers: [
        { id: 1, status: "Active", hasLoan: true, hasSavings: false },
      ],
      usersWithLoans: [
        { id: 1, status: "Active", hasLoan: true, hasSavings: false },
      ],
      usersWithSavings: [],
      toggleSidebar: true,
      setToggleSidebar: vi.fn(),
      showProfileMenu: false,
      setShowProfileMenu: vi.fn(),
    };

    vi.mocked(useAppState).mockReturnValue(mockState);

    // A simple component to consume the context
    const TestComponent = () => {
      const context = useDashboardContext();
      return <div>{context.activeUsers.length}</div>;
    };

    // Render the ContextProvider with TestComponent inside
    render(
      <ContextProvider>
        <TestComponent />
      </ContextProvider>
    );

    // Assert that the context is provided and the expected value is rendered
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should throw an error when useDashboardContext is used outside of ContextProvider", () => {
    const TestComponent = () => {
      useDashboardContext();
      return null;
    };

    // Render without ContextProvider to trigger the error
    const renderWithError = () => render(<TestComponent />);

    // Assert that the error is thrown
    expect(renderWithError).toThrowError(
      "useDashboardContext must be used within a ContextProvider"
    );
  });
});
