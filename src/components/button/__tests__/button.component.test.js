import { render, screen } from "@testing-library/react";

import Button, { BUTTON_TYPE_CLASSES } from "../button.component";

describe("button tests", () => {
  test("should render base button when nothing is passed", () => {
    render(<Button>Test</Button>);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveStyle("background-color: black");
  });

  test("should render google button when button type of 'google' is passed", () => {
    render(
      <Button buttonType={BUTTON_TYPE_CLASSES.google}>Google Button</Button>
    );

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveStyle("background-color: #4285f4");
  });

  test("should render inverted button when button type of 'inverted' is passed", () => {
    render(
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Inverted Button</Button>
    );

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveStyle("background-color: white");
  });

  test("should be disabled if isLoading is true", () => {
    render(<Button isLoading={true} />);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeDisabled();
  });
});
