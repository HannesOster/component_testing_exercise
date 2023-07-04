import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player />);

  const buttons = screen.getAllByRole("button");

  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {});
