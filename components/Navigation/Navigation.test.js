import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);

  const linkPlay = screen.getByRole("link", { name: "Play" });

  expect(linkPlay).toBeInTheDocument();

  const linkHistory = screen.getByRole("link", { name: "History" });

  expect(linkHistory).toBeInTheDocument();
});
