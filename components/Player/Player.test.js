import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player />);

  const buttons = screen.getAllByRole("button");

  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {

    const onDecreasePlayerScore = jest.fn();
  const onIncreasePlayerScore = jest.fn();

  const user = userEvent.setup();

  render(<Player />);

  const decreaseButton = screen.getByRole("button", {
    aria-label:"Decrease Score",
  });
  const increaseButton = screen.getByRole("button", {
    aria-label: /increase/i,
  });

  await user.click(increaseButton);
  await user.click(decreaseButton);
  await user.click(increaseButton);

  expect(onDecreasePlayerScore).toHaveBeenCalledTimes(1);
  expect(onIncreasePlayerScore).toHaveBeenCalledTimes(2);
});
});
