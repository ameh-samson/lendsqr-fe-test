import { render, screen } from "@testing-library/react";
import UserDetailsCard from "./UserDetailsCard";
import profile from "@/assets/svg/profile.svg";
import filledStar from "@/assets/svg/filled-star.svg";
import notFilledStar from "@/assets/svg/empty-stay.svg";

describe("UserDetailsCard Component", () => {
  const mockProps = {
    avatar: "https://example.com/avatar.jpg",
    name: "John Doe",
    id: "12345",
    userTier: 2,
    mainIncome: "$5000",
    bvn: "1122334455",
    bank: "Mock Bank",
  };

  it("renders the user's name and ID", () => {
    render(<UserDetailsCard {...mockProps} />);

    // Check if the name and ID are displayed
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("12345")).toBeInTheDocument();
  });

  it("renders the user's avatar if provided", () => {
    render(<UserDetailsCard {...mockProps} />);

    const avatarImg = screen.getByAltText("avatar");
    expect(avatarImg).toHaveAttribute("src", mockProps.avatar);
  });

  it("renders the default profile image when avatar is not provided", () => {
    render(<UserDetailsCard {...mockProps} avatar={profile} />);

    const avatarImg = screen.getByAltText("avatar");
    expect(avatarImg).toHaveAttribute("src", profile);
  });

  it("renders the correct number of filled and empty stars based on the user's tier", () => {
    render(<UserDetailsCard {...mockProps} />);

    const filledStars = screen
      .getAllByRole("img", { name: "star" })
      .filter((img) => img.getAttribute("src") === filledStar);
    const emptyStars = screen
      .getAllByRole("img", { name: "star" })
      .filter((img) => img.getAttribute("src") === notFilledStar);

    expect(filledStars).toHaveLength(mockProps.userTier);
    expect(emptyStars).toHaveLength(3 - mockProps.userTier);
  });

  it("renders the user's income, BVN, and bank details", () => {
    render(<UserDetailsCard {...mockProps} />);

    expect(screen.getByText(mockProps.mainIncome)).toBeInTheDocument();
    expect(
      screen.getByText(`${mockProps.bvn}/${mockProps.bank}`)
    ).toBeInTheDocument();
  });

  it("renders buttons with correct labels and states", () => {
    render(<UserDetailsCard {...mockProps} />);

    // Check button labels
    const generalDetailsButton = screen.getByText("General Details");
    expect(generalDetailsButton).toBeInTheDocument();

    const documentsButton = screen.getByText("Documents");
    expect(documentsButton).toBeInTheDocument();

    const bankDetailsButton = screen.getByText("Bank Details");
    expect(bankDetailsButton).toBeInTheDocument();

    const loansButton = screen.getByText("Loans");
    expect(loansButton).toBeInTheDocument();

    const savingsBtn = screen.getByText("Savings");
    expect(savingsBtn).toBeInTheDocument();

    const appAndSystem = screen.getByText("App and System");
    expect(appAndSystem).toBeInTheDocument();
  });
});
