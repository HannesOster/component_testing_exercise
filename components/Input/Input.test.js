import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(<Input name="input" labelText="text" />);

  const input = screen.getByLabelText("text");

  expect(input).toHaveAttribute("name", "input");

  // `toHaveAttribute(attributeName, value)`.
});

test("calls callback on every user input", async () => {
  const onChange = jest.fn();

  const user = userEvent.setup();

  render(<Input name="input" labelText="text" onChange={onChange} />);

  const input = screen.getByLabelText("text");
  await user.type(input, "5");

  expect(onChange).toHaveBeenCalledTimes(1);
});
