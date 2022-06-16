import { screen, render } from "@testing-library/react";
import { Button } from "./Button";

test("renders a button", () => {
    render(<Button>Test</Button>);

    const buttonEl = screen.getByRole("button");

    expect(buttonEl).toBeInTheDocument();
});
